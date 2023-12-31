import React, { useEffect, useState } from "react";
import { Analytics, DataStore, Storage } from "aws-amplify";
import { Collection, Flex, Image } from "@aws-amplify/ui-react";

import Modal from "@mui/material/Modal";
import AddPhotoModal from "./AddPhotoModal";
import { ArchiveDetailsModal, UserCard } from "../../ui-components";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Download from "yet-another-react-lightbox/plugins/download";
import Share from "yet-another-react-lightbox/plugins/share";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";

import { ActivityItem, UserDetails } from "../../models";

import { convertISOToTwoLineFormat } from "../../utils";

const ViewArchiveModal = ({
  open,
  setOpenViewActivityModal,
  id,
  setActiveActivity,
  reload,
  setReload,
}) => {
  const [activity, setActivity] = useState();
  const [reloadHandler, setReloadHandler] = useState(true);
  const [openImages, setOpenImages] = useState(false);
  const [imageList, setImageList] = useState([]);
  const [imageNameList, setImageNameList] = useState([]);
  const [openAddPhotoModal, setOpenAddPhotoModal] = useState(false);
  const [userCardDetails, setUserCardDetails] = useState({});

  useEffect(() => {
    if (id) {
      (async function () {
        const activity = await DataStore.query(ActivityItem, id);
        setActivity(activity);
        (async function () {
          for (const image of activity.images) {
            if (!imageNameList.includes(image)) {
              setImageNameList((prevImageNameList) => [
                ...prevImageNameList,
                image,
              ]);
              const link = await Storage.get(image);
              setImageList((prevImageList) => [
                ...prevImageList,
                { src: link },
              ]);
            }
          }
        })();
        setImageList([...new Set(imageList)]);
      })();
    }
    // eslint-disable-next-line
  }, [id, reloadHandler]);

  useEffect(() => {
    activity &&
      (async function () {
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
        await Promise.all(participantPromises)
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
  }, [activity, reloadHandler]);

  const viewPicturesHandler = () => {
    Analytics.record({ name: "photoView" });
    setOpenImages(true);
  };

  const sharePicturesHandler = async () => {
    setOpenAddPhotoModal(true);
    console.log(imageList);
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
          minWidth={"620px"}
          maxWidth={"800px"}
          minHeight={"700px"}
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
                setReload(!reload);
                setOpenViewActivityModal(false);
              }}
              imageSlot39821654={
                <Image
                  src={imageList[0] && imageList[0]["src"]}
                  borderRadius={"12px"}
                  alt="no image"
                  width={"100%"}
                  height={"100%"}
                  objectFit="cover"
                />
              }
              viewPicturesHandler={viewPicturesHandler}
              sharePicturesHandler={sharePicturesHandler}
              hostName={"Host: " + activity.hostName}
              location={activity.residence + " | " + activity.location}
              dateTime={convertISOToTwoLineFormat(activity.dateTime)}
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
                ExitButton: {
                  variation: "destructive",
                },
              }}
            />
          )}
        </Flex>
        <Lightbox
          open={openImages}
          close={() => setOpenImages(false)}
          slides={imageList}
          plugins={[Download, Counter, Share, Slideshow, Thumbnails, Zoom]}
          counter={{ container: { style: { top: "unset", bottom: 0 } } }}
          inline={{
            style: {
              width: "100%",
              maxWidth: "900px",
              aspectRatio: "3 / 2",
              margin: "0 auto",
            },
          }}
        />
        <AddPhotoModal
          id={activity && activity.id}
          open={openAddPhotoModal}
          setOpenAddPhotoModal={setOpenAddPhotoModal}
          reloadHandler={reloadHandler}
          setReloadHandler={setReloadHandler}
        />
      </Flex>
    </Modal>
  );
};

export default ViewArchiveModal;
