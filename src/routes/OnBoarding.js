import React, { useEffect, useState } from "react";
import { Flex, useAuthenticator } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import { useUserObserver } from "../hooks/useUser";
import { UserDetails } from "../models";
import { UserDetailsCreateForm, UserDetailsUpdateForm } from "../ui-components";
import { DataStore } from "aws-amplify";

export const OnBoarding = () => {
  const { user, authStatus } = useAuthenticator((context) => [context.user]);
  // await Analytics.updateEndpoint({
  //   user: user.username,
  //   attributes: { residence: ["BLK111", "BLK112"] },
  // });
  const [userDetailsCreated, setUserDetailsCreated] = useState();
  const [userID, setUserID] = useState();
  const userDets = useUserObserver();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(authStatus);
    if (authStatus === "authenticated") {
      if (userDets && userDets.onBoarded) {
        navigate("/dashboard");
      }
      console.log("hi");
      async function getUserID() {
        console.log(user.username);
        const userDetails = await DataStore.query(UserDetails, (c) =>
          c.name.eq(user.username)
        );
        setUserID(userDetails[0].id);
      }
      if (userDets !== null) {
        setUserDetailsCreated(true);
        getUserID();
      } else {
        setUserDetailsCreated(false);
      }
    }
  }, [navigate, userDets, authStatus, user]);

  let content = (
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
    />
  );

  if (userDetailsCreated) {
    console.log(userID + "hi");
    content = <UserDetailsUpdateForm id={userID} />;
  }

  return (
    <>
      {authStatus === "configuring" && "Loading..."}
      {authStatus !== "authenticated" ? (
        "Not Authed"
      ) : (
        <Flex justifyContent="center" minWidth={"30rem"}>
          {content}
        </Flex>
      )}
    </>
  );
};
