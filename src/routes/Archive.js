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

import convertISOToCustomFormat, {
  filterDateTimeAfterToday,
  filterDateTimeBeforeToday,
} from "../utils";
import AddActivityModal from "../components/AddActivityModal";
import ViewActivityModal from "../components/ViewActivityModal";

export const Archive = () => {
  const { user, authStatus } = useAuthenticator((context) => [context.user]);

  const [activeActivity, setActiveActivity] = useState();
  const [pastActivities, setPastActivities] = useState();
  const [openViewActivityModal, setOpenViewActivityModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const userDets = useUserObserver();
  const navigate = useNavigate();

  useEffect(() => {
    if (authStatus === "authenticated") {
      console.log(userDets);
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

  useEffect(() => {
    (async function () {
      if (userDets) {
        const sortedActivities = await DataStore.query(
          ActivityItem,
          Predicates.ALL,
          {
            sort: (s) => s.dateTime(SortDirection.ASCENDING),
          }
        );
        const currentActivities = filterDateTimeAfterToday(sortedActivities);
        console.log(userDets.residence);
        const filteredActivities = currentActivities.filter((activity) =>
          userDets.residence.includes(activity.residence)
        );
        setPastActivities(filteredActivities);
        setIsLoading(false);
      }
    })();
  }, [userDets]);

  const openViewActivityModalHandler = () => {
    console.log("View Open");
    console.log(activeActivity);
    setOpenViewActivityModal(true);
  };

  const currentTime = new Date();

  return (
    <>
      {authStatus === "configuring" && "Loading..."}
      {authStatus !== "authenticated" ? (
        "Not Authed"
      ) : (
        <Flex
          direction={"column"}
          alignContent={"center"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          width={"100rem"}
        >
          <Flex justifyContent="center" marginTop={"50px"}></Flex>
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
                past meetups (archived)
              </Text>
            </Flex>
            {!isLoading && (
              <Collection
                isPaginated
                itemsPerPage={9}
                items={pastActivities}
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
                      Join one now!
                    </Text>
                  </Flex>
                }
                searchPlaceholder="Find your next activity!"
              >
                {(activity, index) => (
                  <ActivityCardDescription
                    key={activity.id}
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
                    }}
                  />
                )}
              </Collection>
            )}
          </Flex>
          <ViewActivityModal
            id={activeActivity}
            open={openViewActivityModal}
            setOpenViewActivityModal={setOpenViewActivityModal}
            user={user}
          />
        </Flex>
      )}
    </>
  );
};
