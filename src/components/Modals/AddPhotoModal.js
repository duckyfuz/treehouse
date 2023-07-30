import React, { Button, Flex, Text } from "@aws-amplify/ui-react";

import { MdDelete } from "react-icons/md";
import Modal from "@mui/material/Modal";
import { AddPhotoForm } from "../../ui-components";

import { toast } from "react-toastify";

const AddPhotoModal = ({
  id,
  open,
  setOpenAddPhotoModal,
  reloadHandler,
  setReloadHandler,
}) => {
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
          minWidth={"700px"}
          maxWidth={"800px"}
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
            <Text fontSize="2em">Share your memories!</Text>
            <Button
              onClick={() => {
                setOpenAddPhotoModal(false);
              }}
              variation="warning"
              size="large"
              gap="0.4rem"
            >
              Exit <MdDelete />
            </Button>
          </Flex>
          <AddPhotoForm
            id={id}
            width={"100%"}
            onSuccess={() => {
              setOpenAddPhotoModal(false);
              setReloadHandler(!reloadHandler);
              toast.success(
                `Successfully uploaded images! Click on "View Pictures" to take a look.`
              );
            }}
          />
        </Flex>
      </Flex>
    </Modal>
  );
};

export default AddPhotoModal;
