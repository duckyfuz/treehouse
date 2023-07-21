import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, Flex, Text } from "@aws-amplify/ui-react";
import {
  HomePageFeatures,
  HomePageFinisher,
  HomePageFooter,
  HomePageIntro,
} from "../ui-components";

import { FaDoorOpen } from "react-icons/fa6";

import logo from "../assets/images/logo.png";
import image from "../assets/images/treehouse720.jpeg";

export const Home = () => {
  const navigate = useNavigate();

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
        <Button
          size="large"
          gap="0.4rem"
          variation="primary"
          onClick={() => {
            navigate("/login");
          }}
        >
          <FaDoorOpen />
          Login
        </Button>
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
        overrides={{
          "image 1": {
            borderRadius: "15px",
          },
        }}
        getStartedHandler={() => {
          navigate("/login");
        }}
      />
      <HomePageFeatures />
      <HomePageFinisher
        borderRadius={"15px"}
        createAccountHandler={() => {
          navigate("/login");
        }}
      />
      <HomePageFooter />
    </Flex>
  );
};
