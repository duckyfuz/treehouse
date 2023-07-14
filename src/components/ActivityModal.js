import React, { useCallback, useEffect, useState } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { DataStore, Notifications } from "aws-amplify";
import { ActionCard, NoActionCard } from "../ui-components";
import { ActivityItem } from "../models";
import convertISOToCustomFormat from "../utils";

const { InAppMessaging } = Notifications;

const Modal = ({ activity }) => {
  const { user } = useAuthenticator((context) => [context.user]);
  const [activityDetails, setActivityDetails] = useState();
  const [reloadHandler, setReloadHandler] = useState(true);

  useEffect(() => {
    const getActivity = async () => {
      const activityDetails = await DataStore.query(ActivityItem, activity);
      setActivityDetails(activityDetails);
    };
    getActivity();
  }, [activity, reloadHandler]);

  const contactHostHandler = () => {
    InAppMessaging.dispatchEvent({
      name: "newParticipant",
      attributes: { residence: "BLK111" },
    });
  };

  const attendActivityHandler = async () => {
    const original = await DataStore.query(ActivityItem, activity);
    await DataStore.save(
      ActivityItem.copyOf(original, (updated) => {
        updated.participants.push(user.username);
      })
    );
    setReloadHandler(!reloadHandler);
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
        "PARTICIPANTS LIST": {
          children:
            activityDetails.participants.length === 0
              ? "No participants yet... \nBe the first to join! "
              : activityDetails.participants,
        },
        "DETAILS FILL": {
          children: activityDetails.description,
        },
      }}
    />
  );
};

export default Modal;
