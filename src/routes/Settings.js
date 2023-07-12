import React, { useEffect } from "react";
import { Flex } from "@aws-amplify/ui-react";

import { useNavigate } from "react-router-dom";
import { useUserObserver } from "../hooks/useUser";

export const Settings = () => {
  const { user } = useUserObserver();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !user.onBoarded) {
      navigate("/onboarding");
    }
  }, [navigate, user]);

  return (
    <Flex justifyContent="center" minWidth={"30rem"}>
      <div>Settings</div>
    </Flex>
  );
};
