import React, { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Auth } from "aws-amplify";
import { Authenticator, useAuthenticator, Flex } from "@aws-amplify/ui-react";

export function Login() {
  const { route } = useAuthenticator((context) => [context.route]);

  const location = useLocation();
  const navigate = useNavigate();

  const initialFrom = location.state?.from?.pathname || "/";
  const from = useRef(initialFrom);

  useEffect(() => {
    if (route === "authenticated") {
      navigate(from.current, { replace: true });
    }
  }, [route, navigate, from]);

  const services = {
    async handleConfirmSignUp({ username, code }) {
      await Auth.confirmSignUp(username, code);
      from.current = "/";
    },
  };

  return (
    <Flex width={"100%"}>
      <Flex
        justifyContent="center"
        alignContent={"center"}
        alignItems={"center"}
        width={"50%"}
        backgroundColor={"EFF0F0"}
      >
        <Authenticator services={services} />
      </Flex>
      <Flex
        justifyContent="center"
        alignContent={"center"}
        alignItems={"center"}
        width={"50%"}
        backgroundColor={"#fffef0"}
      >
        {/* Space for image(s) */}
      </Flex>
    </Flex>
  );
}
