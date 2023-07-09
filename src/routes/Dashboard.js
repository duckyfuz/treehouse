import React, { useState } from "react";
import { Flex, ScrollView } from "@aws-amplify/ui-react";

import { ActivityCardCollection } from "../ui-components";
import Modal from "../components/ActivityModal";

export const Dashboard = () => {
  const [activeActivity, setActiveActivity] = useState("");
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

  return (
    <Flex justifyContent="center">
      <ScrollView height={(window.innerHeight * 5) / 6} width={"500px"}>
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
                  setActiveActivity(item.id);
                },
              },
            },
          })}
        />
      </ScrollView>
      <Modal activity={activeActivity} />
    </Flex>
  );
};
