import { Button, Flex, Text } from "@aws-amplify/ui-react";

import { MdDelete } from "react-icons/md";
import Modal from "@mui/material/Modal";
import { ActivityItemCreateForm, AddPhotoForm } from "../../ui-components";

import { useUserObserver } from "../../hooks/useUser";
import { useEffect } from "react";

const AddPhotoModal = ({ id, open, setOpenAddPhotoModal }) => {
  const userDets = useUserObserver();

  useEffect(() => {
    console.log(id);
  }, []);

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
            <Text fontSize="2em">Host a new activity!</Text>
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
            // onSubmit={(fields) => {
            //   const updatedFields = {};
            //   Object.keys(fields).forEach((key) => {
            //     if (typeof fields[key] === "string") {
            //       updatedFields[key] = fields[key].trim();
            //     } else {
            //       updatedFields[key] = fields[key];
            //     }
            //   });
            //   updatedFields["hostName"] = userDets.preferedName;
            //   updatedFields["host"] = userDets.name;
            //   updatedFields["participants"] = [];
            //   updatedFields["images"] = [];
            //   return updatedFields;
            // }}
            onSuccess={() => {
              setOpenAddPhotoModal(false);
            }}
          />
        </Flex>
      </Flex>
    </Modal>
  );
};

export default AddPhotoModal;
