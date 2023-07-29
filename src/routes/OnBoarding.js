import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { DataStore } from "aws-amplify";
import { Flex, Text, useAuthenticator } from "@aws-amplify/ui-react";

import { OnboardingForm, UserDetailsCreateForm } from "../ui-components";

import { UserDetails } from "../models";

import { useUserObserver } from "../hooks/useUser";
import { toast } from "react-toastify";

export const OnBoarding = () => {
  const { user, authStatus } = useAuthenticator((context) => [context.user]);
  const [userDetailsCreated, setUserDetailsCreated] = useState();
  const [userID, setUserID] = useState();
  const userDets = useUserObserver();
  const navigate = useNavigate();

  useEffect(() => {
    if (authStatus === "authenticated") {
      // If the user is authenticated and has completed onboarding, navigate to "/dashboard".
      if (userDets && userDets.onBoarded) {
        navigate("/dashboard");
      }

      // Check if userDets is not null and update userDetailsCreated state accordingly.
      if (userDets !== null) {
        setUserDetailsCreated(true);

        // Fetch user details from DataStore using the user's username and update the userID state.
        (async function () {
          const userDetails = await DataStore.query(UserDetails, (c) =>
            c.name.eq(user.username)
          );
          setUserID(userDetails[0].id);
        })();
      } else {
        // If userDets is null, set userDetailsCreated state to false.
        setUserDetailsCreated(false);
      }
    }
  }, [navigate, userDets, authStatus, user]);

  return (
    <>
      {authStatus === "configuring" && "Loading..."}
      {authStatus !== "authenticated" ? (
        "Not Authed"
      ) : (
        <Flex marginTop={"50px"} minWidth={"30rem"} direction={"column"}>
          <Text
            variation="primary"
            lineHeight="1.5em"
            fontWeight={500}
            fontSize="2em"
            fontStyle="bold"
            marginLeft={"20px"}
          >
            Onbarding Form
          </Text>
          {userDetailsCreated ? (
            <OnboardingForm
              id={userID}
              onSuccess={() => {
                toast.success(`Welcome aboard!`);
              }}
            />
          ) : (
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
                updatedFields["name"] = user.username;
                updatedFields["activitiesAttended"] = [];
                updatedFields["activitiesHosted"] = [];
                return updatedFields;
              }}
              onSuccess={() => {
                toast.success(`Welcome aboard!`);
              }}
            />
          )}
        </Flex>
      )}
    </>
  );
};
