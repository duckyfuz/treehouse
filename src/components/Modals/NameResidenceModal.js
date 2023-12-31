import React, { Button, Flex, Text } from "@aws-amplify/ui-react";

import Modal from "@mui/material/Modal";
import { UserDetailsUpdateForm } from "../../ui-components";

import { toast } from "react-toastify";

const NameResidenceModal = ({ id, open, setNRModal }) => {
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
          minWidth={"400px"}
          maxWidth={"650px"}
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
            <Text fontSize="2em">Change User Details</Text>
            <Button
              onClick={() => {
                setNRModal(false);
              }}
              variation="destructive"
              size="large"
              gap="0.4rem"
            >
              Cancel
            </Button>
          </Flex>
          <Flex
            width={"100%"}
            paddingLeft={"25px"}
            paddingRight={"25px"}
            justifyContent="center"
            alignItems="center"
            alignContent="center"
          ></Flex>
          <UserDetailsUpdateForm
            id={id}
            onSubmit={(fields) => {
              const updatedFields = {};
              Object.keys(fields).forEach((key) => {
                if (typeof fields[key] === "string") {
                  updatedFields[key] = fields[key].trim();
                } else {
                  updatedFields[key] = fields[key];
                }
              });
              updatedFields["residence"] = [...new Set(fields.residence)];
              return updatedFields;
            }}
            onSuccess={() => {
              setNRModal(false);
              toast.success(`User details updated.`);
            }}
          />
        </Flex>
      </Flex>
    </Modal>
  );
};

export default NameResidenceModal;
