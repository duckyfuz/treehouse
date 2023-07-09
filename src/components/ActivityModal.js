import React, { useCallback, useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { ActionCard, NoActionCard } from "../ui-components";
import { ActivityItem } from "../models";

const Modal = ({ activity }) => {
  const [activityDetails, setActivityDetails] = useState();

  useEffect(() => {
    const getActivity = async () => {
      const activityDetails = await DataStore.query(ActivityItem, activity);
      setActivityDetails(activityDetails);
    };
    getActivity();
    console.log(activityDetails);
  }, [activity]);

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

  const contactHostHandler = () => {
    console.log("contact host");
  };

  const attendActivityHandler = () => {
    console.log("attend activity");
  };

  if (activityDetails === undefined) {
    return <NoActionCard />;
  }
  return (
    <ActionCard
      overrides={{
        "ACTIVITY TITLE": {
          children: activityDetails.title,
        },
        LOCATION: {
          children:
            activityDetails.residence + " | " + activityDetails.location,
        },
        "DATE AND TIME": {
          children: convertISOToCustomFormat(activityDetails.dateTime),
        },
        Button39001905: { color: "red", onClick: attendActivityHandler },
        Button39001917: { color: "blue", onClick: contactHostHandler },
        "PARTICIPANTS LIST": { children: activityDetails.participants },
        "DETAILS FILL": { children: activityDetails.description },
      }}
    />
  );
};

export default Modal;
