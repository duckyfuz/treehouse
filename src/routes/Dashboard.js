import React, { useEffect, useState } from "react";
import { DataStore, Storage } from "aws-amplify";
import { Flex, ScrollView } from "@aws-amplify/ui-react";

import { ActivityCardCollection } from "../ui-components";
import { UserDetails } from "../models";
import Modal from "../components/ActivityModal";

export const Dashboard = () => {
  const [profiles, setProfiles] = useState([]);
  const [activeActivity, setActiveActivity] = useState();
  function convertISOToCustomFormat(isoTime) {
    const dateObj = new Date(isoTime);
    const day = dateObj.getDate().toString().padStart(2, "0");
    const month = dateObj.toLocaleString("default", { month: "short" });
    const year = dateObj.getFullYear().toString().slice(-2);
    let hours = dateObj.getHours();
    let ampm = "AM";

    if (hours >= 12) {
      ampm = "PM";
      if (hours > 12) {
        hours -= 12;
      }
    }

    const minutes = dateObj.getMinutes();

    const formattedDate = `${day} ${month} ${year}`;
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")} ${ampm}`;

    return `${formattedDate} | ${formattedTime}`;
  }

  useEffect(() => {
    const getProfiles = async () => {
      const profiles = await DataStore.query(UserDetails);
      setProfiles(profiles);
    };
    getProfiles();
  });

  return (
    <Flex justifyContent="center" minWidth={"30rem"}>
      <ScrollView height={(window.innerHeight * 5) / 6} width={"520px"}>
        <ActivityCardCollection
          overrideItems={({ item }) => ({
            overrides: {
              "DATE AND TIME": {
                children: convertISOToCustomFormat(item.dateTime),
              },
              LOCATION: { children: item.residence + " | " + item.location },
              USERNAME: { children: item.hostName },
              "5 other participants...": {
                children: item.participants.length + " other participant(s)...",
              },
              ActivityCard: {
                onClick: () => {
                  setActiveActivity(item.hostName);
                },
              },
            },
          })}
        />
      </ScrollView>
      <Modal isOpen={true} param1={activeActivity} param2="Value 2" />
    </Flex>
  );
};
