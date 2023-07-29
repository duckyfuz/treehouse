import { Button, Flex, Text } from "@aws-amplify/ui-react";

import { MdDelete } from "react-icons/md";
import Modal from "@mui/material/Modal";
import { ChangeProfilePic } from "../../ui-components";

import { useUserObserver } from "../../hooks/useUser";
import { toast } from "react-toastify";

const ProfilePictureModal = ({ id, open, setPictureModal }) => {
  const userDets = useUserObserver();

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
          width={"45%"}
          direction={"column"}
          padding={"5px"}
          borderRadius={"15px"}
        >
          <Flex
            width={"100%"}
            paddingLeft={"25px"}
            paddingRight={"25px"}
            paddingTop={"15px"}
            justifyContent="space-between"
            alignItems="center"
            alignContent="center"
          >
            <Text fontSize="2em">Change Profile Picture</Text>
            <Button
              onClick={() => {
                setPictureModal(false);
              }}
              variation="warning"
              size="large"
              gap="0.4rem"
            >
              Cancel <MdDelete />
            </Button>
          </Flex>
          <Flex
            width={"100%"}
            paddingLeft={"25px"}
            paddingRight={"25px"}
            justifyContent="center"
            alignItems="center"
            alignContent="center"
          >
            <Text fontSize="1.2em">
              Remember to delete the previous photo first!
            </Text>
          </Flex>
          <ChangeProfilePic
            id={id}
            onSuccess={() => {
              setPictureModal(false);
              toast.success(`Profile picture uploaded! You're looking good.`)
            }}
          />
        </Flex>
      </Flex>
    </Modal>
  );
};

export default ProfilePictureModal;
