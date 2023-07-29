// Refactored CAA 250723
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { DataStore, Storage } from "aws-amplify";
import { Button, Flex, Text, useAuthenticator } from "@aws-amplify/ui-react";

import { FaDoorClosed, FaDoorOpen } from "react-icons/fa6";
import {
  HomePageFeatures,
  HomePageFinisher,
  HomePageFooter,
  HomePageIntro,
} from "../ui-components";

import logo from "../assets/images/logo.png";
import { toast } from "react-toastify";

export const Home = () => {
  const navigate = useNavigate();
  const { authStatus, signOut } = useAuthenticator((context) => [context.user]);
  const [imageURL, setImageURL] = useState();

  function logOut() {
    signOut();
    DataStore.clear();
    navigate("/");
  }

  useEffect(() => {
    (async function () {
      try {
        const imageURL = await Storage.get("treehouseHome.jpg", {
          validateObjectExistence: true,
        });
        setImageURL(imageURL);
      } catch (error) {
        setImageURL(
          "https://media.istockphoto.com/id/1357830750/vector/geometric-illustration-of-multi-coloured-human-figures.jpg?s=612x612&w=0&k=20&c=2uvkAa8B9pyBcMbMUoE6zQVXPrNAz8Tdysdfq8G3oKM="
        );
        console.error("Not Authenticated - showing default picture:", error);
      }
    })();
  }, []);

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
        image={imageURL}
        getStartedHandler={() => {
          navigate("/dashboard");
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
            navigate("/dashboard");
          }}
        />
      )}
      <HomePageFooter
        subscribeHandler={() => {
          toast(`That button is actually just for show.`);
        }}
      />
    </Flex>
  );
};
