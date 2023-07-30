import React, { Button, Flex, Text } from "@aws-amplify/ui-react";

import { MdDelete } from "react-icons/md";
import Modal from "@mui/material/Modal";
import { PasswordChange } from "../../ui-components";
import { toast } from "react-toastify";
import { Auth } from "aws-amplify";

const ChangePassModal = ({ open, setPassModal }) => {
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
            <Text fontSize="2em">Change Password</Text>
            <Button
              onClick={() => {
                setPassModal(false);
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
          ></Flex>
          <PasswordChange
            onSubmit={(fields) => {
              if (fields.NewPass !== fields.ConfirmPass) {
                toast.error(`Your passwords do not match! Try again.`);
              } else {
                (async function () {
                  try {
                    const user = await Auth.currentAuthenticatedUser();
                    console.log(user.username);
                    const data = await Auth.changePassword(
                      user,
                      fields.CurrentPass,
                      fields.NewPass
                    );
                    if (data === "SUCCESS") {
                      toast.success(`Password changed successfully!`);
                      setPassModal(false);
                    } else {
                      toast.error(
                        `Something went wrong! Try again after some time.`
                      );
                    }
                  } catch (err) {
                    toast.error(
                      `Something went wrong! Check your inputs and try again.`
                    );
                    console.log(err);
                  }
                })();
              }
            }}
          />
        </Flex>
      </Flex>
    </Modal>
  );
};

export default ChangePassModal;
