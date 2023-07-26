import { useEffect, useState } from "react";
import { DataStore, Notifications, Storage } from "aws-amplify";
import { Card, Collection, Flex } from "@aws-amplify/ui-react";

import Modal from "@mui/material/Modal";
import { FutureActivityModal, UserCard } from "../../ui-components";

import { useUserObserver } from "../../hooks/useUser";
import { ActivityItem, UserDetails } from "../../models";

import convertISOToCustomFormat from "../../utils";

const { InAppMessaging } = Notifications;

const ViewActivityModal = ({
  open,
  setOpenViewActivityModal,
  id,
  user,
  setActiveActivity,
}) => {
  const [loading, setLoading] = useState(true);
  const [activity, setActivity] = useState();
  const [reloadHandler, setReloadHandler] = useState(true);
  const [userCardDetails, setUserCardDetails] = useState({});

  const userDets = useUserObserver();

  useEffect(() => {
    if (id) {
      (async function () {
        const activity = await DataStore.query(ActivityItem, id);
        setActivity(activity);
        console.log(activity.participants);

        // Use Promise.all to wait for all the queries to complete
        const participantPromises = activity.participants.map(async function (
          participant
        ) {
          const user = await DataStore.query(UserDetails, (c) =>
            c.name.eq(participant)
          );
          const userD = user[0];
          const profilePicURL = await Storage.get(userD.profilePicture);
          console.log(profilePicURL);
          return [userD.name, [userD.preferedName, profilePicURL]];
        });

        // Wait for all participant queries to complete before updating userCardDetails
        Promise.all(participantPromises)
          .then((results) => {
            const updatedDetails = Object.fromEntries(results);
            setUserCardDetails((prevDetails) => ({
              ...prevDetails,
              ...updatedDetails,
            }));
            console.log(userCardDetails);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error while querying user details:", error);
          });
      })();
    }
  }, [id, reloadHandler]);

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
    (async function () {
      const user = await DataStore.query(UserDetails, userDets.id);
      const updatedActivitiesAttended = [...user.activitiesAttended, "1"];
      const updatedUser = await DataStore.save(
        UserDetails.copyOf(user, (updated) => {
          updated.activitiesAttended = updatedActivitiesAttended;
        })
      );
      console.log(updatedUser);
      InAppMessaging.dispatchEvent({
        name: "Participation",
        attributes: {
          participated: updatedUser.activitiesAttended.length.toString(),
          hosted: updatedUser.activitiesHosted.length.toString(),
        },
      });
    })();
    setReloadHandler(!reloadHandler);
  };

  return (
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
          width={"40%"}
          direction={"column"}
          borderRadius={"15px"}
          paddingTop={"15px"}
        >
          {activity && userCardDetails && (
            <FutureActivityModal
              width="100%"
              activityItem={activity}
              exitHandler={() => {
                setActiveActivity();
                console.log(userCardDetails);
                setUserCardDetails();
                // setReload(!reload);
                setOpenViewActivityModal(false);
              }}
              attendHandler={attendActivityHandler}
              contactHandler={contactHostHandler}
              participantsSlot={
                <Collection
                  isPaginated
                  itemsPerPage={10}
                  items={activity.participants}
                  type="list"
                  direction="row"
                  wrap="wrap"
                >
                  {(participant) => (
                    <UserCard
                      key={participant}
                      name={
                        userCardDetails[participant] &&
                        userCardDetails[participant][0]
                      }
                      profilePic={
                        userCardDetails[participant] &&
                        userCardDetails[participant][1]
                      }
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
                    activity.participants.includes(userDets.name) ||
                    activity.host === userDets.name
                      ? true
                      : false,
                },
                Button39831749: {
                  isDisabled: activity.host === userDets.name ? true : false,
                },
                "PARTICIPANTS LIST": {
                  children:
                    activity.participants.length === 0
                      ? "No participants yet... \nBe the first to join! "
                      : activity.participants,
                },
                "HOST: hostname": {
                  children: "Host: " + activity.host,
                },
              }}
            />
          )}
        </Flex>
      </Flex>
    </Modal>
  );
};

export default ViewActivityModal;
