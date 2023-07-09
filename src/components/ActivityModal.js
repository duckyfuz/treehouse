import React, { useCallback } from "react";
import { Flex } from "@aws-amplify/ui-react";
import { ActionCard } from "../ui-components";

const Modal = ({ activity }) => {
  useCallback(() => {}, []);

  const contactHostHandler = () => {
    console.log("contact host");
  };

  const attendActivityHandler = () => {
    console.log("attend activity");
  };

  return (
    <ActionCard
      overrides={{
        "ACTIVITY TITLE": { color: "red", children: activity },
        LOCATION: { color: "red" },
        "DATE AND TIME": { color: "red" },
        Button: { color: "red" },
        "PARTICIPANTS LIST": { color: "red" },
        "DETAILS FILL": { color: "red" },
      }}
    />
  );
};

export default Modal;
