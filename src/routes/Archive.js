import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { DataStore, Predicates, SortDirection, Storage } from "aws-amplify";
import {
  Collection,
  Flex,
  Text,
  useAuthenticator,
  Image,
} from "@aws-amplify/ui-react";

import { ActivityCardImage } from "../ui-components";
import ViewActivityModal from "../components/Modals/ViewActivityModal";

import { ActivityItem, UserDetails } from "../models";

import { useUserObserver } from "../hooks/useUser";
import convertISOToCustomFormat, { filterDateTimeAfterToday } from "../utils";
import ViewArchiveModal from "../components/Modals/ViewArchiveModal";

export const Archive = () => {
  const { user, authStatus } = useAuthenticator((context) => [context.user]);

  const [activeActivity, setActiveActivity] = useState();
  const [pastActivities, setPastActivities] = useState();
  const [openViewActivityModal, setOpenViewActivityModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const userDets = useUserObserver();
  const navigate = useNavigate();

  const [imageDict, setImageDict] = useState({});

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

  // Fetch activites + sort and filter + fetch images
  useEffect(() => {
    (async function () {
      if (userDets) {
        const sortedActivities = await DataStore.query(
          ActivityItem,
          Predicates.ALL,
          {
            sort: (s) => s.dateTime(SortDirection.DESCENDING),
          }
        );
        const currentActivities = filterDateTimeAfterToday(sortedActivities);
        const filteredActivities = currentActivities.filter(
          (activity) =>
            userDets.residence.includes(activity.residence) &&
            activity.participants.includes(userDets.name)
        );
        setPastActivities(filteredActivities);

        filteredActivities.forEach((activity) => {
          (async function () {
            const link = await Storage.get(activity.images[0]);
            setImageDict((prevImageDict) => ({
              ...prevImageDict,
              [activity.id]: link,
            }));
          })();
        });
        setIsLoading(false);
      }
    })();
  }, [userDets]);

  const openViewActivityModalHandler = () => {
    setOpenViewActivityModal(true);
  };

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
                searchPlaceholder="Search for a good memory!"
              >
                {(activity) => (
                  <ActivityCardImage
                    key={activity.id}
                    width={"28rem"}
                    margin={"0.5rem"}
                    activityItem={activity}
                    group1={
                      <Image
                        src={imageDict[activity.id]}
                        width={"448px"}
                        height={"120px"}
                        objectFit="cover"
                      />
                    }
                    dateTime={convertISOToCustomFormat(activity.dateTime)}
                    location={activity.residence + ", " + activity.location}
                    moreDetailsHandler={() => {
                      setActiveActivity(activity.id);
                      openViewActivityModalHandler();
                    }}
                  />
                )}
              </Collection>
            )}
          </Flex>
          {activeActivity && (
            <ViewArchiveModal
              id={activeActivity}
              setActiveActivity={setActiveActivity}
              open={openViewActivityModal}
              setOpenViewActivityModal={setOpenViewActivityModal}
              user={user}
            />
          )}
        </Flex>
      )}
    </>
  );
};
