import { useEffect, useState } from "react";
import { DataStore, Notifications } from "aws-amplify";
import { Collection, Flex } from "@aws-amplify/ui-react";

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
  const [activity, setActivity] = useState();
  const [reloadHandler, setReloadHandler] = useState(true);

  const userDets = useUserObserver();

  useEffect(() => {
    if (id) {
      async function getActivity() {
        const activity = await DataStore.query(ActivityItem, id);
        setActivity(activity);
      }
      getActivity();
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
          {activity && (
            <FutureActivityModal
              width="100%"
              activityItem={activity}
              exitHandler={() => {
                setActiveActivity();
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
                  {(participant) => <UserCard />}
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
