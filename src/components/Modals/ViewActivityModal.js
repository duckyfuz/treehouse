import Modal from "@mui/material/Modal";
import { Button, Flex, Text, useAuthenticator } from "@aws-amplify/ui-react";
import { MdDelete } from "react-icons/md";
import { useUserObserver } from "../../hooks/useUser";
import { useEffect, useState } from "react";
import { ActivityItem } from "../../models";
import { DataStore, Notifications } from "aws-amplify";
import convertISOToCustomFormat from "../../utils";
import { ViewActivityDetailsModal } from "../../ui-components";

const { InAppMessaging } = Notifications;

const ViewActivityModal = ({ open, setOpenViewActivityModal, id, user }) => {
  const [activity, setActivity] = useState();
  const [reloadHandler, setReloadHandler] = useState(true);

  const userDets = useUserObserver();

  useEffect(() => {
    if (id) {
      async function getActivity() {
        const activity = await DataStore.query(ActivityItem, id);
        setActivity(activity);
        console.log(activity);
      }
      console.log(activity);
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
    setReloadHandler(!reloadHandler);
  };

  const TitleBar = () => {
    return (
      <Flex
        width={"100%"}
        justifyContent="space-between"
        alignItems="center"
        alignContent="center"
      >
        <Text fontSize="2em">Activity Title</Text>
        <Button
          onClick={() => {
            setOpenViewActivityModal(false);
          }}
          variation="warning"
          size="large"
          gap="0.4rem"
        >
          Exit <MdDelete />
        </Button>
      </Flex>
    );
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
          padding={"25px"}
          borderRadius={"15px"}
          paddingTop={"15px"}
        >
          <TitleBar />
          {activity && (
            <ViewActivityDetailsModal
              width={"100%"}
              overrides={{
                "ACTIVITY TITLE": {
                  children: activity.title,
                },
                LOCATION: {
                  children: activity.residence + " | " + activity.location,
                },
                "DATE AND TIME": {
                  children: convertISOToCustomFormat(activity.dateTime),
                },
                Button39001905: {
                  color: "red",
                  onClick: attendActivityHandler,
                },
                Button39001917: {
                  color: "blue",
                  onClick: contactHostHandler,
                },
                "PARTICIPANTS LIST": {
                  children:
                    activity.participants.length === 0
                      ? "No participants yet... \nBe the first to join! "
                      : activity.participants,
                },
                "DETAILS FILL": {
                  children: activity.description,
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
