import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, Flex } from "@aws-amplify/ui-react";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Flex justifyContent="center" minWidth={"30rem"}>
      Home
      <Button
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </Button>
    </Flex>
  );
};
