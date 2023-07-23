import Modal from "@mui/material/Modal";
import {
  Button,
  Flex,
  Image,
  Text,
  useAuthenticator,
} from "@aws-amplify/ui-react";
import { MdDelete } from "react-icons/md";
import { useUserObserver } from "../../hooks/useUser";
import { useEffect, useState } from "react";
import { ActivityItem } from "../../models";
import { DataStore, Notifications, Storage } from "aws-amplify";
import convertISOToCustomFormat from "../../utils";
import { ArchiveDetailsModal } from "../../ui-components";

const { InAppMessaging } = Notifications;

const ViewArchiveModal = ({
  open,
  setOpenViewActivityModal,
  id,
  user,
  setActiveActivity,
}) => {
  const [activity, setActivity] = useState();
  const [reloadHandler, setReloadHandler] = useState(true);
  const [coverImage, setCoverImage] = useState();

  const userDets = useUserObserver();

  useEffect(() => {
    if (id) {
      (async function () {
        const activity = await DataStore.query(ActivityItem, id);
        setActivity(activity);
        const link = await Storage.get(activity.images[0]);
        setCoverImage(link);
      })();
    }
  }, [id, reloadHandler]);

  const viewPicturesHandler = () => {
    console.log("viewPictures");
  };

  const sharePicturesHandler = async () => {
    console.log("sharePicture");
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
            <ArchiveDetailsModal
              width={"100%"}
              activityItem={activity}
              exitHandler={() => {
                setActiveActivity();
                setOpenViewActivityModal(false);
              }}
              imageSlot39821654={
                <Image
                  src={coverImage}
                  width={"100%"}
                  height={"100%"}
                  objectFit="cover"
                />
              }
              viewPicturesHandler={viewPicturesHandler}
              sharePicturesHandler={sharePicturesHandler}
              overrides={{
                LOCATION: {
                  children: activity.residence + " | " + activity.location,
                },
                "DATE AND TIME": {
                  children: convertISOToCustomFormat(activity.dateTime),
                },
                Button39831738: {
                  color: "blue",
                },
                Button39831743: {
                  color: "red",
                },
                "PARTICIPANTS LIST": {
                  children:
                    activity.participants.length === 0
                      ? "No participants yet... \nBe the first to join! "
                      : activity.participants,
                },
                "DETAILS FILL": {},
              }}
            />
          )}
        </Flex>
      </Flex>
    </Modal>
  );
};

export default ViewArchiveModal;
