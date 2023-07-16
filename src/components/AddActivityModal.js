import Modal from "@mui/material/Modal";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
import { ActivityItemCreateForm } from "../ui-components";
import { MdDelete } from "react-icons/md";

const AddActivityModal = ({ open, setOpenAddActivityModal }) => {
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
        >
          <Flex
            width={"100%"}
            paddingLeft={"25px"}
            paddingRight={"25px"}
            paddingTop={"10px"}
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
          <ActivityItemCreateForm width={"100%"} />
        </Flex>
      </Flex>
    </Modal>
  );
};

export default AddActivityModal;
