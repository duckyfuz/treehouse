import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Analytics,
  DataStore,
  Predicates,
  SortDirection,
  Storage,
} from "aws-amplify";
import {
  Collection,
  Flex,
  Text,
  useAuthenticator,
  Image,
  Button,
} from "@aws-amplify/ui-react";

import { ActivityCardImage } from "../ui-components";
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
  const [reloadHandler, setReloadHandler] = useState(false);
  const userDets = useUserObserver();
  const navigate = useNavigate();

  const [imageDict, setImageDict] = useState({});

  // Onboarding checks
  useEffect(() => {
    if (authStatus === "authenticated") {
      if (userDets && !userDets.onBoarded) {
        navigate("/onboarding");
      }
      if (user) {
        (async function getOnBoardingStatus() {
          const userDetails = await DataStore.query(UserDetails, (c) =>
            c.name.eq(user.username)
          );
          if (userDetails.length === 0) {
            navigate("/onboarding");
          }
        })();
      }
    } else if (authStatus === "unauthenticated") {
      navigate("/login");
    }
  }, [navigate, userDets, authStatus, user]);

  // Fetch activites + sort and filter + fetch images
  useEffect(() => {
    async function fetchAndProcessData() {
      if (userDets) {
        try {
          const sortedActivities = await DataStore.query(
            ActivityItem,
            Predicates.ALL,
            {
              sort: (s) => s.dateTime(SortDirection.DESCENDING),
            }
          );
          const filteredActivities = filterDateTimeAfterToday(
            sortedActivities
          ).filter(
            (activity) =>
              userDets.residence.includes(activity.residence) &&
              (activity.participants.includes(userDets.id) ||
                activity.host === userDets.name)
          );
          setPastActivities(filteredActivities);
          const fetchImagePromises = filteredActivities.map(
            async (activity) => {
              const link = await Storage.get(activity.images[0]);
              return { id: activity.id, link };
            }
          );
          // Use Promise.all to wait for all image fetch operations to complete
          const imageResults = await Promise.all(fetchImagePromises);
          // Transform the array of image results into an object using reduce
          const imageDict = imageResults.reduce((acc, { id, link }) => {
            acc[id] = link;
            return acc;
          }, {});
          setImageDict((prevImageDict) => ({
            ...prevImageDict,
            ...imageDict,
          }));
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching and processing data:", error);
          setIsLoading(false);
        }
      }
    }
    // Call the fetchAndProcessData function
    fetchAndProcessData();
  }, [userDets, setActiveActivity, reloadHandler]);

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
                    <Button
                      marginTop={"-15px"}
                      size="medium"
                      gap="0.4rem"
                      variation="link"
                      onClick={() => {
                        navigate("/dashboard");
                      }}
                    >
                      Go to Dashboard
                    </Button>
                  </Flex>
                }
                searchPlaceholder="Looking for something?"
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
                        alt="no image"
                        width={"448px"}
                        height={"120px"}
                        objectFit="cover"
                      />
                    }
                    dateTime={convertISOToCustomFormat(activity.dateTime)}
                    location={activity.residence + ", " + activity.location}
                    moreDetailsHandler={() => {
                      Analytics.record({ name: "viewArchiveActivity" });
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
              reload={reloadHandler}
              setReload={setReloadHandler}
            />
          )}
        </Flex>
      )}
    </>
  );
};
