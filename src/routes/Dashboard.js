import React, { useState, useEffect } from "react";
import { Card, Flex, ScrollView, Text } from "@aws-amplify/ui-react";

import { ActivityCardCollection, UserCard } from "../ui-components";
import Modal from "../components/ActivityModal";

import { useNavigate } from "react-router-dom";
import { useUserObserver } from "../hooks/useUser";

import convertISOToCustomFormat from "../utils";
import { UserDetails } from "../models";
import { DataStore } from "aws-amplify";
import { useAuthenticator } from "@aws-amplify/ui-react";

export const Dashboard = () => {
  const Authenticator = useAuthenticator((context) => [context.user]);

  const [activeActivity, setActiveActivity] = useState("");
  const user = useUserObserver();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !user.onBoarded) {
      navigate("/onboarding");
    }
    async function getOnBoardingStatus() {
      const userDetails = await DataStore.query(UserDetails, (c) =>
        c.name.eq(Authenticator.user.username)
      );
      if (userDetails.length === 0) {
        navigate("/onboarding");
      }
    }
    getOnBoardingStatus();
  }, [navigate, user]);

  return (
    <Flex
      direction={"column"}
      alignContent={"center"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      width={"100rem"}
    >
      <Flex
        width={"90rem"}
        height={"200px"}
        backgroundColor={"blue"}
        justifyContent="space-between"
        alignItems="center"
        alignContent="flex-start"
      >
        <Text>Hello user</Text>
      </Flex>
      <Flex justifyContent="center">
        <Card variation="elevated" width={"90rem"}>
          <Text
            variation="primary"
            lineHeight="1.5em"
            fontWeight={500}
            fontSize="2em"
            fontStyle="bold"
          >
            national activities
          </Text>
        </Card>
      </Flex>
      <Flex
        backgroundColor={"blue"}
        alignContent={"center"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        width={"90rem"}
      >
        <Text
          variation="primary"
          lineHeight="1.5em"
          fontWeight={500}
          fontSize="2em"
          fontStyle="bold"
        >
          neighborhood meetups
        </Text>
      </Flex>
      {/* <Flex justifyContent="space-between">
        <UserCard
          mode={"Light"}
          overrides={{
            Heading: {
              children: "HELLo",
            },
            Body39111824: { children: "HELLo" },
            Body39121831: { children: "HELLo" },
          }}
        />
      </Flex>
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
                  children:
                    item.participants.length + " other participant(s)...",
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
      </Flex> */}
    </Flex>
  );
};
