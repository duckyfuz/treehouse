import React, { useState, useEffect } from "react";
import { Flex, ScrollView } from "@aws-amplify/ui-react";

import { ActivityCardCollection } from "../ui-components";
import Modal from "../components/ActivityModal";

import { useNavigate } from "react-router-dom";
import { useUserObserver } from "../hooks/useUser";

import convertISOToCustomFormat from "../utils";

export const Dashboard = () => {
  const [activeActivity, setActiveActivity] = useState("");
  const { user } = useUserObserver();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !user.onBoarded) {
      navigate("/onboarding");
    }
  }, [navigate, user]);

  return (
    <Flex justifyContent="center">
      <ScrollView height={(window.innerHeight * 9) / 10} width={"500px"}>
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
