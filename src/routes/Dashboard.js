import React, { useState, useEffect } from "react";
import { DataStore, Predicates, SortDirection } from "aws-amplify";
import {
  Button,
  Card,
  Collection,
  Flex,
  Placeholder,
  Text,
  useAuthenticator,
} from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import { useUserObserver } from "../hooks/useUser";

import { ActivityItem, UserDetails } from "../models";
import {
  ActivityCardDescription,
  NatCardDescriptionCollection,
} from "../ui-components";

import { BiMessageSquareAdd } from "react-icons/bi";

import convertISOToCustomFormat, { filterDateTimeBeforeToday } from "../utils";
import AddActivityModal from "../components/AddActivityModal";
import ViewActivityModal from "../components/ViewActivityModal";

export const Dashboard = () => {
  const Authenticator = useAuthenticator((context) => [context.user]);

  const [activeActivity, setActiveActivity] = useState();
  const [futureActivities, setFutureActivities] = useState();
  const [openAddActivityModal, setOpenAddActivityModal] = useState(false);
  const [openViewActivityModal, setOpenViewActivityModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const userDets = useUserObserver();
  const navigate = useNavigate();

  useEffect(() => {
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
    }
    getOnBoardingStatus();
  }, [navigate, userDets]);

  useEffect(() => {
    (async function () {
      const sortedActivities = await DataStore.query(
        ActivityItem,
        Predicates.ALL,
        {
          sort: (s) => s.dateTime(SortDirection.ASCENDING),
        }
      );
      const filteredActivities = filterDateTimeBeforeToday(sortedActivities);
      setFutureActivities(filteredActivities);
      setIsLoading(false);
    })();
  }, []);

  const openAddActivityModalHandler = () => {
    setOpenAddActivityModal(true);
  };

  const openViewActivityModalHandler = () => {
    setOpenViewActivityModal(true);
  };

  let content = <Placeholder size="large" />;

  const AddActivityButton = () => {
    return (
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
    );
  };

  const currentTime = new Date();
  if (userDets !== null) {
    content = (
      <>
        <Text
          variation="primary"
          lineHeight="1.5em"
          fontWeight={500}
          fontSize="2em"
          fontStyle="bold"
        >
          Good{" "}
          {currentTime.getHours() < 12
            ? "Morning"
            : currentTime.getHours() < 18
            ? "Afternoon"
            : "Evening"}
          , {!isLoading && userDets.preferedName}
        </Text>
        <AddActivityButton />
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
        {!isLoading && (
          <Collection
            isPaginated
            itemsPerPage={3}
            items={futureActivities}
            type="list"
            direction="row"
            wrap="nowrap"
            isSearchable
            searchNoResultsFound={
              <Flex
                justifyContent="center"
                alignContent={"center"}
                alignItems={"center"}
                direction={"column"}
              >
                <Text
                  variation="primary"
                  lineHeight="1.2em"
                  fontWeight={360}
                  fontSize="1.4em"
                  fontStyle="bold"
                >
                  No activities found...
                </Text>
                <AddActivityButton />
                <Text
                  variation="primary"
                  lineHeight="0.8em"
                  fontWeight={340}
                  fontSize="1.2em"
                  fontStyle="bold"
                >
                  Why not host your own!
                </Text>
              </Flex>
            }
            searchPlaceholder="Find your next activity!"
          >
            {(activity, index) => (
              <ActivityCardDescription
                width={"28rem"}
                margin={"0.5rem"}
                activityItem={activity}
                dateTime={convertISOToCustomFormat(activity.dateTime)}
                location={activity.residence + ", " + activity.location}
                participants={
                  activity.participants.length + " neighbor(s) attending!"
                }
                moreDetailsHandler={() => {
                  setActiveActivity(activity.id);
                  openViewActivityModalHandler();
                  console.log(activeActivity);
                }}
              />
            )}
          </Collection>
        )}
      </Flex>
      <AddActivityModal
        open={openAddActivityModal}
        setOpenAddActivityModal={setOpenAddActivityModal}
      />
      <ViewActivityModal
        id={activeActivity}
        open={openViewActivityModal}
        setOpenViewActivityModal={setOpenViewActivityModal}
      />
    </Flex>
  );
};
