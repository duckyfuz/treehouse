import { useNavigate, useLocation } from "react-router-dom";
import { Flex, Button, Text, Card, Link } from "@aws-amplify/ui-react";

import {
  MdDashboard,
  MdArchive,
  MdSettings,
  MdExitToApp,
} from "react-icons/md";
import logo from "../assets/images/logo.png";

const LogoName = () => {
  const navigate = useNavigate();

  return (
    <>
      <Flex alignItems="center" margin={"20px"} onClick={() => navigate("/")}>
        <img src={logo} alt="logo" width={"80px"} height={"80px"} />
        <Text
          variation="primary"
          lineHeight="1.5em"
          fontWeight={600}
          fontSize="2em"
          fontStyle="bold"
        >
          treehouse
        </Text>
      </Flex>
      <Text variation="secondary" fontSize="1.2em" marginBottom={"30px"}>
        Revive the kampong spirit!
      </Text>
    </>
  );
};

export const NavButtons = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      <Flex direction="column" alignItems="start" width={"100%"} gap={"5px"}>
        <Button
          variation={pathname === "/dashboard" ? "primary" : "menu"}
          size="large"
          gap="0.4rem"
          width="100%"
          onClick={() => navigate("/dashboard")}
        >
          <MdDashboard />
          Dashboard
        </Button>
        <Button
          variation={pathname === "/archive" ? "primary" : "menu"}
          size="large"
          gap="0.4rem"
          width="100%"
          onClick={() => navigate("/archive")}
        >
          <MdArchive />
          Archive
        </Button>
        <Button
          variation={pathname === "/settings" ? "primary" : "menu"}
          size="large"
          gap="0.4rem"
          width="100%"
          onClick={() => navigate("/settings")}
        >
          <MdSettings />
          Settings
        </Button>
        <Button size="medium" variation="link" marginTop={"10px"}>
          <Link
            href={`mailto:kennethgao25@gmail.com?subject=Hello from treehouse!`}
          >
            Contact Us
          </Link>
        </Button>
      </Flex>
    </>
  );
};

export function Sidebar({ logOut }) {
  return (
    <Card variation="elevated">
      <Flex alignItems="center" direction="column" height={"100%"}>
        <LogoName />
        <NavButtons />
        <Flex alignContent={"flex-end"}>
          <Button
            marginTop={"60px"}
            size="large"
            gap="0.4rem"
            variation="destructive"
            padding={"12px"}
            onClick={() => logOut()}
          >
            <MdExitToApp /> Log Out
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
}
