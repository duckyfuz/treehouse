// Refactored CAA 250723
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Analytics, DataStore, Predicates, SortDirection } from "aws-amplify";
import {
  Button,
  Card,
  Collection,
  Flex,
  Text,
  useAuthenticator,
} from "@aws-amplify/ui-react";

import { BiMessageSquareAdd } from "react-icons/bi";
import {
  ActivityCardDescription,
  NatCardDescriptionCollection,
} from "../ui-components";
import AddActivityModal from "../components/Modals/AddActivityModal";
import ViewActivityModal from "../components/Modals/ViewActivityModal";

import { ActivityItem, UserDetails } from "../models";

import { useUserObserver } from "../hooks/useUser";
import convertISOToCustomFormat, { filterDateTimeBeforeToday } from "../utils";

const currentTime = new Date();

export const Dashboard = () => {
  const navigate = useNavigate();
  const userDets = useUserObserver();

  const { user, authStatus } = useAuthenticator((context) => [context.user]);
  const [futureActivities, setFutureActivities] = useState();

  const [openAddActivityModal, setOpenAddActivityModal] = useState(false);
  const [openViewActivityModal, setOpenViewActivityModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [activeActivity, setActiveActivity] = useState();

  // Onboarding checks
  useEffect(() => {
    if (authStatus === "authenticated") {
      if (userDets && !userDets.onBoarded) {
        navigate("/onboarding");
      }
      async function getOnBoardingStatus() {
        const userDetails = await DataStore.query(UserDetails, (c) =>
          c.name.eq(user.username)
        );
        if (userDetails.length === 0) {
          navigate("/onboarding");
        }
      }
      if (user) {
        getOnBoardingStatus();
      }
    }
  }, [navigate, userDets, authStatus, user]);

  // Fetch activites + sort and filter
  useEffect(() => {
    (async function () {
      if (userDets) {
        // Fetch and sort activities
        const sortedActivities = await DataStore.query(
          ActivityItem,
          Predicates.ALL,
          {
            sort: (s) => s.dateTime(SortDirection.ASCENDING),
          }
        );

        // Filter activites by date and residence (unable to do so within amplify)
        const currentActivities = filterDateTimeBeforeToday(sortedActivities);
        const filteredActivities = currentActivities.filter((activity) =>
          userDets.residence.includes(activity.residence)
        );
        setFutureActivities(filteredActivities);
        setIsLoading(false);

        // Update Analytics Identifiers
        await Analytics.updateEndpoint({
          userId: user.id,
          attributes: { residence: user.residence },
        });
      }
    })();
  }, [userDets, user]);

  const AddActivityButton = () => {
    return (
      <Button
        size="large"
        gap="0.4rem"
        variation="primary"
        onClick={() => {
          Analytics.record({ name: "viewAddActivity" });
          setOpenAddActivityModal(true);
        }}
      >
        <BiMessageSquareAdd /> Host an Activity!
      </Button>
    );
  };

  const TopBar = () => {
    return (
      <Flex
        width={"90rem"}
        height={"150px"}
        justifyContent="space-between"
        alignItems="center"
      >
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
          , {userDets && userDets.preferedName}
        </Text>
        <AddActivityButton />
      </Flex>
    );
  };

  const NatActivitiesDisplay = () => {
    return (
      <Card variation="elevated" width="90rem">
        <Text
          variation="primary"
          lineHeight="1.5em"
          fontWeight={500}
          fontSize="2em"
          marginBottom={"14px"}
        >
          nationwide activities
        </Text>
        <NatCardDescriptionCollection
          width={"100%"}
          justifyContent={"center"}
          overrideItems={({ item }) => ({
            overrides: {
              "Date and Time": {
                children: convertISOToCustomFormat(item.dateTime),
              },
            },
          })}
        />
      </Card>
    );
  };

  const FutureActivitesDisplay = () => {
    return (
      <Flex direction="column" width={"90rem"}>
        <Text
          variation="primary"
          lineHeight="1.5em"
          fontWeight={500}
          fontSize="2em"
        >
          neighborhood meetups
        </Text>
        {!isLoading && (
          <Collection
            width={"90rem"}
            isPaginated
            itemsPerPage={6}
            items={futureActivities}
            type="list"
            direction="row"
            wrap="wrap"
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
                <Text
                  variation="primary"
                  lineHeight="0.8em"
                  fontWeight={340}
                  fontSize="1.2em"
                  fontStyle="bold"
                >
                  Why not host your own!
                </Text>
                <AddActivityButton />
              </Flex>
            }
            searchPlaceholder="Find your next activity!"
          >
            {(activity) => (
              <ActivityCardDescription
                key={activity.id}
                width={"28.3rem"}
                margin={"0.5rem"}
                activityItem={activity}
                dateTime={convertISOToCustomFormat(activity.dateTime)}
                location={activity.residence + ", " + activity.location}
                participants={
                  activity.participants.length + " neighbor(s) attending!"
                }
                moreDetailsHandler={() => {
                  Analytics.record({ name: "viewFutureActivity" });
                  setActiveActivity(activity);
                  setOpenViewActivityModal(true);
                }}
              />
            )}
          </Collection>
        )}
      </Flex>
    );
  };

  return (
    <>
      {authStatus !== "authenticated" ? (
        "Not Authed"
      ) : (
        <Flex
          direction="column"
          justifyContent="flex-start"
          alignItems="stretch"
          alignContent="flex-start"
          marginLeft={"20px"}
        >
          <TopBar />
          <NatActivitiesDisplay />
          <FutureActivitesDisplay />
          <AddActivityModal
            open={openAddActivityModal}
            setOpenAddActivityModal={setOpenAddActivityModal}
          />
          <ViewActivityModal
            userDets={userDets}
            open={openViewActivityModal}
            activity={activeActivity}
            closeModalHandler={() => {
              setActiveActivity();
              setOpenViewActivityModal(false);
            }}
          />
        </Flex>
      )}
    </>
  );
};
