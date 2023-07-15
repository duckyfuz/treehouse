import React, { useEffect } from "react";
import { Flex } from "@aws-amplify/ui-react";

import { useNavigate } from "react-router-dom";
import { useUserObserver } from "../hooks/useUser";
import { UserDetails } from "../models";
import { DataStore } from "aws-amplify";
import { useAuthenticator } from "@aws-amplify/ui-react";

export const Settings = () => {
  const Authenticator = useAuthenticator((context) => [context.user]);

  const user = useUserObserver();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !user.onBoarded) {
      navigate("/onboarding");
    }
    async function getOnBoardingStatus() {
      const userDetails = await DataStore.query(UserDetails, (c) =>
        c.name.eq(Authenticator.user.username)
      );
      if (userDetails.length === 0) {
        navigate("/onboarding");
      }
    }
    getOnBoardingStatus();
  }, [navigate, user]);

  return (
    <Flex justifyContent="center" width={"30rem"}>
      <div>Settings</div>
    </Flex>
  );
};
