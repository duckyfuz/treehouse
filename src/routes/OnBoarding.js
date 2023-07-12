import React, { useEffect } from "react";
import { Flex } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import { useUserObserver } from "../hooks/useUser";

export const OnBoarding = () => {
  // await Analytics.updateEndpoint({
  //   user: user.username,
  //   attributes: { residence: ["BLK111", "BLK112"] },
  // });
  const { user } = useUserObserver();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.onBoarded) {
      navigate("/dashboard");
    }
  }, [navigate, user]);

  return (
    <Flex justifyContent="center" minWidth={"30rem"}>
      <div>OnBoarding</div>
    </Flex>
  );
};
