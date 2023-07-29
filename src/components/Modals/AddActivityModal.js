import React, { DataStore, Notifications } from "aws-amplify";
import { Button, Flex, Text } from "@aws-amplify/ui-react";

import { MdDelete } from "react-icons/md";
import Modal from "@mui/material/Modal";
import { ActivityItemCreateForm } from "../../ui-components";

import { useUserObserver } from "../../hooks/useUser";
import { UserDetails } from "../../models";

const { InAppMessaging } = Notifications;

const AddActivityModal = ({ open, setOpenAddActivityModal }) => {
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
          borderRadius={"15px"}
          padding={"25px"}
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
            <Text fontSize="2em">Host a new activity!</Text>
            <Button
              onClick={() => {
                setOpenAddActivityModal(false);
              }}
              variation="warning"
              size="large"
              gap="0.4rem"
            >
              Exit <MdDelete />
            </Button>
          </Flex>
          <ActivityItemCreateForm
            width={"100%"}
            onSubmit={(fields) => {
              const updatedFields = {};
              Object.keys(fields).forEach((key) => {
                if (typeof fields[key] === "string") {
                  updatedFields[key] = fields[key].trim();
                } else {
                  updatedFields[key] = fields[key];
                }
              });
              updatedFields["hostName"] = userDets.preferedName;
              updatedFields["host"] = userDets.name;
              updatedFields["participants"] = [];
              updatedFields["images"] = [];
              return updatedFields;
            }}
            onSuccess={(fields) => {
              console.log(fields);
              (async function () {
                const user = await DataStore.query(UserDetails, userDets.id);
                const updatedActivitiesHosted = [...user.activitiesHosted, "1"];
                const updatedUser = await DataStore.save(
                  UserDetails.copyOf(user, (updated) => {
                    updated.activitiesHosted = updatedActivitiesHosted;
                  })
                );
                console.log(updatedUser);
                InAppMessaging.dispatchEvent({
                  name: "Hostation",
                  attributes: {
                    participated: updatedUser.activitiesAttended.length,
                    hosted: updatedUser.activitiesHosted.length,
                  },
                });
              })();
              setOpenAddActivityModal(false);
            }}
          />
        </Flex>
      </Flex>
    </Modal>
  );
};

export default AddActivityModal;
