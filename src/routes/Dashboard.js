import React, { useState, useEffect } from "react";
import { DataStore } from "aws-amplify";
import {
  Button,
  Card,
  Flex,
  Placeholder,
  Text,
  useAuthenticator,
} from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import { useUserObserver } from "../hooks/useUser";

import { UserDetails } from "../models";
import {
  ActivityCardDescriptionCollection,
  NatCardDescriptionCollection,
} from "../ui-components";
import Modal from "../components/ActivityModal";

import { BiMessageSquareAdd } from "react-icons/bi";

import convertISOToCustomFormat from "../utils";
import AddActivityModal from "../components/AddActivityModal";

export const Dashboard = () => {
  const Authenticator = useAuthenticator((context) => [context.user]);

  const [activeActivity, setActiveActivity] = useState();
  const [openAddActivityModal, setOpenAddActivityModal] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const userDets = useUserObserver();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    if (userDets && !userDets.onBoarded) {
      navigate("/onboarding");
    }
    async function getOnBoardingStatus() {
      let name = Authenticator.user.username;
      const userDetails = await DataStore.query(UserDetails, (c) =>
        c.name.eq(name)
      );
      if (userDetails.length === 0) {
        navigate("/onboarding");
      }
      setIsLoading(false);
    }
    getOnBoardingStatus();
  }, [navigate, userDets]);

  const openAddActivityModalHandler = () => {
    setOpenAddActivityModal(true);
  };

  let content = <Placeholder size="large" />;

  if (userDets !== null && !isLoading) {
    content = (
      <>
        <Text
          variation="primary"
          lineHeight="1.5em"
          fontWeight={500}
          fontSize="2em"
          fontStyle="bold"
        >
          Welcome back, {userDets.preferedName}
        </Text>
        <Button
          size="large"
          gap="0.4rem"
          variation="primary"
          onClick={() => {
            openAddActivityModalHandler();
          }}
        >
          <BiMessageSquareAdd /> Host an Activity!
        </Button>
      </>
    );
  }

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
        justifyContent="space-between"
        alignItems="center"
        alignContent="flex-start"
      >
        {content}
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
          <NatCardDescriptionCollection
            overrideItems={({ item }) => ({
              overrides: {
                "Date and Time": {
                  children: convertISOToCustomFormat(item.dateTime),
                },
              },
            })}
          />
        </Card>
      </Flex>
      <Flex
        direction={"column"}
        alignContent={"center"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        width={"90rem"}
      >
        <Flex width={"90rem"}>
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
        <ActivityCardDescriptionCollection
          overrideItems={({ item }) => ({
            overrides: {
              "This is the Activity Name": {
                children: item.title,
                width: "24rem",
                isTruncated: true,
                whiteSpace: "nowrap",
              },
              "Date and Time": {
                children: convertISOToCustomFormat(item.dateTime),
              },
              "Location of Event": {
                children: item.residence + ", " + item.location,
              },
              HostName: {
                children: "Host: " + item.hostName,
              },
              ParticipantsNo: {
                children: item.participants.length + " neighbor(s) attending!",
              },
            },
          })}
        />
      </Flex>
      <AddActivityModal
        open={openAddActivityModal}
        setOpenAddActivityModal={setOpenAddActivityModal}
      />
    </Flex>
  );
};
