import React, { useEffect } from "react";
import { Flex, useAuthenticator } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import { useUserObserver } from "../hooks/useUser";
import { UserDetails } from "../models";
import { UserDetailsCreateForm } from "../ui-components";
import { DataStore } from "aws-amplify";

export const OnBoarding = () => {
  // await Analytics.updateEndpoint({
  //   user: user.username,
  //   attributes: { residence: ["BLK111", "BLK112"] },
  // });
  const { user } = useUserObserver();
  const navigate = useNavigate();
  const Authenticator = useAuthenticator((context) => [context.user]);

  useEffect(() => {
    if (user && user.onBoarded) {
      navigate("/dashboard");
    }
  }, [navigate, user]);

  // Authenticator.user;

  return (
    <Flex justifyContent="center" minWidth={"30rem"}>
      <UserDetailsCreateForm
        onSubmit={(fields) => {
          const updatedFields = {};
          Object.keys(fields).forEach((key) => {
            if (typeof fields[key] === "string") {
              updatedFields[key] = fields[key].trim();
            } else {
              updatedFields[key] = fields[key];
            }
          });
          updatedFields["name"] = Authenticator.user.username;
          return updatedFields;
        }}
      />
    </Flex>
  );
};
