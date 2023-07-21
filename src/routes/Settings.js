import React, { useEffect } from "react";
import { Flex, Placeholder } from "@aws-amplify/ui-react";

import { useNavigate } from "react-router-dom";
import { useUserObserver } from "../hooks/useUser";
import { UserDetails } from "../models";
import { DataStore } from "aws-amplify";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { UserDetailsUpdateForm } from "../ui-components";

export const Settings = () => {
  const { user, authStatus } = useAuthenticator((context) => [context.user]);

  const userDets = useUserObserver();
  const navigate = useNavigate();

  useEffect(() => {
    if (authStatus === "authenticated") {
      console.log(userDets);
      if (userDets && !userDets.onBoarded) {
        navigate("/onboarding");
      }
      async function getOnBoardingStatus() {
        const userDetails = await DataStore.query(UserDetails, (c) =>
          c.name.eq(user.username)
        );
        if (userDetails.length === 0) {
          navigate("/onboarding");
        }
      }
      if (user) {
        getOnBoardingStatus();
      }
    }
  }, [navigate, userDets, authStatus, user]);

  let content = <Placeholder size="large" />;
  if (userDets) {
    content = (
      <UserDetailsUpdateForm
        id={userDets.id}
        onSuccess={() => {
          console.log("submitted");
        }}
      />
    );
  }

  return (
    <Flex minWidth={"30rem"} direction={"column"}>
      {content}
    </Flex>
  );
};
