import React, { useEffect, useState } from "react";
import { Analytics, DataStore, Notifications, Storage } from "aws-amplify";
import { Collection, Flex } from "@aws-amplify/ui-react";

import Modal from "@mui/material/Modal";
import { FutureActivityModal, UserCard } from "../../ui-components";

import { ActivityItem, UserDetails } from "../../models";

import convertISOToCustomFormat from "../../utils";
import { toast } from "react-toastify";

const { InAppMessaging } = Notifications;

const ViewActivityModal = ({ userDets, open, activity, closeModalHandler }) => {
  const [userCardDetails, setUserCardDetails] = useState({});
  const [attendContact, setAttendContact] = useState([false, false]);

  // Fetch details for UserCard
  useEffect(() => {
    activity &&
      (async function () {
        setAttendContact([
          activity.participants.includes(userDets.id),
          activity.host === userDets.name,
        ]);
        // Use Promise.all to wait for all the queries to complete
        const participantPromises = activity.participants.map(async function (
          participant
        ) {
          const user = await DataStore.query(UserDetails, participant);
          try {
            const profilePicURL = await Storage.get(user.profilePicture, {
              validateObjectExistence: true,
            });
            return [user.id, [user.preferedName, profilePicURL]];
          } catch (error) {
            console.error("Error fetching profile picture:", error);
            const profilePicURL =
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwvGWjwjiCh8UCmLjeDGBj9iIZt7cyiynfwnYz_63_hg&s";
            return [user.id, [user.preferedName, profilePicURL]];
          }
        });
        // Wait for all participant queries to complete before updating userCardDetails
        Promise.all(participantPromises)
          .then((results) => {
            const updatedDetails = Object.fromEntries(results);
            setUserCardDetails((prevDetails) => ({
              ...prevDetails,
              ...updatedDetails,
            }));
          })
          .catch((error) => {
            console.error("Error while querying user details:", error);
          });
      })();
  }, [activity, userDets]);

  const contactHostHandler = () => {
    console.log("Contacting Host");
    toast.error(
      `This feature is still being worked on! Try again in a month or so.`
    );
  };

  // Update ActivityItem, then UserDetails, send IAM event (Analytics kinda iffy tho)
  const attendActivityHandler = async () => {
    await DataStore.save(
      ActivityItem.copyOf(activity, (updated) => {
        updated.participants.push(userDets.id);
      })
    );
    const updatedUser = await DataStore.save(
      UserDetails.copyOf(userDets, (updated) => {
        updated.activitiesAttended = [
          ...userDets.activitiesAttended,
          activity.id,
        ];
      })
    );
    InAppMessaging.dispatchEvent({
      name: "Participation",
      attributes: {
        participated: updatedUser.activitiesAttended.length.toString(),
        hosted: updatedUser.activitiesHosted.length.toString(),
      },
    });
    Analytics.record({ name: "participation" });
    setAttendContact([true, false]);
    toast.success(`You are taking part in: ${activity.title}`);
    closeModalHandler();
  };

  return (
    <>
      {activity !== undefined && (
        <Modal
          open={open}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            height={"100%"}
          >
            <Flex
              backgroundColor={"white"}
              width={"50%"}
              minHeight={"40%"}
              direction={"column"}
              borderRadius={"15px"}
              padding={"25px"}
            >
              {activity && userCardDetails && (
                <FutureActivityModal
                  width="100%"
                  activityItem={activity}
                  exitHandler={() => {
                    setUserCardDetails();
                    closeModalHandler();
                  }}
                  attendHandler={attendActivityHandler}
                  contactHandler={contactHostHandler}
                  participantsSlot={
                    <Collection
                      isPaginated
                      itemsPerPage={8}
                      items={activity.participants}
                      type="list"
                      direction="row"
                      wrap="wrap"
                      gap={"10px"}
                    >
                      {(participant) => (
                        <UserCard
                          width={"200px"}
                          key={participant}
                          name={
                            userCardDetails[participant] &&
                            userCardDetails[participant][0]
                          }
                          profilePic={
                            userCardDetails[participant] &&
                            userCardDetails[participant][1]
                          }
                          overrides={{
                            image: {
                              objectFit: "cover",
                            },
                          }}
                        />
                      )}
                    </Collection>
                  }
                  overrides={{
                    LOCATION: {
                      children: activity.residence + " | " + activity.location,
                    },
                    "PARTICIPANTS LIST": {
                      children:
                        activity.participants.length === 0
                          ? "No participants yet... \nBe the first to join! "
                          : activity.participants,
                    },
                    "DATE AND TIME": {
                      children: convertISOToCustomFormat(activity.dateTime),
                    },
                    Button39831748: {
                      isDisabled:
                        attendContact[0] || attendContact[1] ? true : false,
                    },
                    Button39831749: {
                      isDisabled: attendContact[1] ? true : false,
                    },
                    "HOST: hostname": {
                      children: "Host: " + activity.hostName,
                    },
                  }}
                />
              )}
            </Flex>
          </Flex>
        </Modal>
      )}
    </>
  );
};

export default ViewActivityModal;
