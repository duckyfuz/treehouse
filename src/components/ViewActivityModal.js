import Modal from "@mui/material/Modal";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
import { MdDelete } from "react-icons/md";
import { useUserObserver } from "../hooks/useUser";

const ViewActivityModal = ({ open, setOpenViewActivityModal, id }) => {
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
            <Text fontSize="2em">Activity Title</Text>
            <Button
              onClick={() => {
                setOpenViewActivityModal(false);
              }}
              variation="warning"
              size="large"
              gap="0.4rem"
            >
              Exit <MdDelete />
            </Button>
          </Flex>
          <Text>{id}</Text>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default ViewActivityModal;
