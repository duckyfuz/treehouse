import React from "react";
import { useNavigate } from "react-router-dom";

import { DataStore } from "aws-amplify";
import { Button, Flex, Text, useAuthenticator } from "@aws-amplify/ui-react";

import { FaDoorClosed, FaDoorOpen } from "react-icons/fa6";
import {
  HomePageFeatures,
  HomePageFinisher,
  HomePageFooter,
  HomePageIntro,
} from "../ui-components";

import logo from "../assets/images/logo.png";
import image from "../assets/images/treehouse720.jpeg";

export const Home = () => {
  const { authStatus, signOut } = useAuthenticator((context) => [context.user]);
  const navigate = useNavigate();

  function logOut() {
    signOut();
    DataStore.clear();
    navigate("/");
  }

  const LogoName = () => {
    return (
      <Flex
        justifyContent="space-between"
        alignItems="center"
        alignContent="flex-start"
        width={"1440px"}
      >
        <Flex alignItems="center" margin={"20px"}>
          <img src={logo} alt="logo" width={"120px"} height={"120px"} />
          <Text
            variation="primary"
            lineHeight="1.5em"
            fontWeight={600}
            fontSize="3em"
          >
            treehouse
          </Text>
        </Flex>
        {authStatus === "unauthenticated" ? (
          <Button
            size="large"
            gap="0.4rem"
            variation="primary"
            onClick={() => {
              navigate("/login");
            }}
          >
            <FaDoorOpen />
            Log In
          </Button>
        ) : (
          <Button
            size="large"
            gap="0.4rem"
            variation="destructive"
            onClick={() => {
              logOut();
            }}
          >
            <FaDoorClosed />
            Log Out
          </Button>
        )}
      </Flex>
    );
  };

  return (
    <Flex
      alignContent={"center"}
      alignItems={"center"}
      direction={"column"}
      width={"100%"}
    >
      <LogoName />
      <HomePageIntro
        borderRadius={"15px"}
        image={image}
        getStartedHandler={() => {
          navigate("/login");
        }}
        overrides={{
          "image 1": {
            borderRadius: "15px",
          },
        }}
      />
      <HomePageFeatures />
      {authStatus === "authenticated" ? (
        <HomePageFinisher
          borderRadius={"15px"}
          createAccountHandler={() => {
            navigate("/login");
          }}
          overrides={{
            Button: {
              children: "Let's Get Started!",
            },
          }}
        />
      ) : (
        <HomePageFinisher
          borderRadius={"15px"}
          createAccountHandler={() => {
            navigate("/login");
          }}
        />
      )}
      <HomePageFooter />
    </Flex>
  );
};
