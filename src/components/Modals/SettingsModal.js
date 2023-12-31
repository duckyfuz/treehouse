import React, { Storage } from "aws-amplify";
import { Button, Flex, Text } from "@aws-amplify/ui-react";

import Modal from "@mui/material/Modal";
import { ProfileView } from "../../ui-components";

import { useUserObserver } from "../../hooks/useUser";
import { useEffect, useState } from "react";
import ProfilePictureModal from "./ProfilePictureModal";
import NameResidenceModal from "./NameResidenceModal";
import ChangePassModal from "./ChangePassModal";

function SettingsModal({ open, setOpenSettings }) {
  const userDets = useUserObserver();
  const [profilePictureURL, setProfilePictureURL] = useState();
  const [pictureModal, setPictureModal] = useState(false);
  const [NRModal, setNRModal] = useState(false);
  const [passModal, setPassModal] = useState(false);

  // Fetch activites + sort and filter
  useEffect(() => {
    const fetchProfilePictureURL = async () => {
      try {
        if (userDets) {
          const profilePictureURL = await Storage.get(userDets.profilePicture, {
            validateObjectExistence: true,
          });
          console.log(profilePictureURL);
          setProfilePictureURL(profilePictureURL);
        }
      } catch (error) {
        console.error("Error fetching profile picture:", error);
        setProfilePictureURL(
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwvGWjwjiCh8UCmLjeDGBj9iIZt7cyiynfwnYz_63_hg&s"
        );
      }
    };

    fetchProfilePictureURL();
  }, [userDets]);

  return (
    userDets && (
      <>
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
              minWidth={"550px"}
              maxWidth={"600px"}
              direction={"column"}
              borderRadius={"15px"}
              padding={"25px"}
            >
              <Flex
                justifyContent="space-between"
                alignItems="center"
                alignContent="center"
              >
                <Text fontSize="2em">Settings</Text>
                <Button
                  onClick={() => {
                    setOpenSettings(false);
                  }}
                  variation="destructive"
                  size="large"
                  gap="0.4rem"
                >
                  Exit
                </Button>
              </Flex>
              <ProfileView
                width={"100%"}
                userDetails={userDets}
                changePictureHandler={() => {
                  setPictureModal(true);
                }}
                changePasswordHandler={() => {
                  setPassModal(true);
                }}
                editProfileHandler={() => {
                  setNRModal(true);
                }}
                profilePictureURL={profilePictureURL}
                residences={userDets.residence.join(", ")}
              />
            </Flex>
          </Flex>
        </Modal>
        <ProfilePictureModal
          id={userDets.id}
          open={pictureModal}
          setPictureModal={setPictureModal}
        />
        <NameResidenceModal
          id={userDets.id}
          open={NRModal}
          setNRModal={setNRModal}
        />
        <ChangePassModal open={passModal} setPassModal={setPassModal} />
      </>
    )
  );
}

export default SettingsModal;
