import React, { useEffect, useState } from "react";
import { Flex, ScrollView, View, Text } from "@aws-amplify/ui-react";

import {
  ActionCard,
  ActivityCard,
  ActivityCardCollection,
  IconName,
} from "../ui-components";
import { DataStore } from "aws-amplify";
import { UserDetails } from "../models";

export const Dashboard = () => {
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

    return `${formattedDate} ${formattedTime}`;
  }

  const getProfile = async ({ host }) => {
    const userDetails = await DataStore.query(UserDetails, (c) =>
      c.name.eq(host)
    );
    const imageURL = await Storage.get(userDetails[0].profilePicture);
    return imageURL;
  };

  return (
    <Flex justifyContent="center" minWidth={"30rem"}>
      <ScrollView height={window.innerHeight} width="500px">
        <ActivityCardCollection
          overrides={{}}
          overrideItems={({ item, index }) => ({
            overrides: {
              "DATE AND TIME": {
                children: convertISOToCustomFormat(item.dateTime),
              },
              LOCATION: { children: item.residence + " | " + item.location },
              overrides: {
                "5 other participants...": { children: "hello" },
              },
            },
          })}
        />
      </ScrollView>
    </Flex>
  );
};
