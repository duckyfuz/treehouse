import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Flex, Button, Text, Card, Link } from "@aws-amplify/ui-react";

import {
  MdDashboard,
  MdArchive,
  MdSettings,
  MdExitToApp,
} from "react-icons/md";
import logo from "../../assets/images/logo.png";

import SettingsModal from "../Modals/SettingsModal";

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

const NavButtons = ({ openSettings, setOpenSettings }) => {
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
          variation={
            openSettings || pathname === "/onboarding" ? "primary" : "menu"
          }
          size="large"
          gap="0.4rem"
          width="100%"
          onClick={() => setOpenSettings(true)}
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

const Sidebar = ({ logOut }) => {
  const [openSettings, setOpenSettings] = useState(false);

  return (
    <Card variation="elevated">
      <Flex alignItems="center" direction="column" height={"100%"}>
        <LogoName />
        <NavButtons
          openSettings={openSettings}
          setOpenSettings={setOpenSettings}
        />
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
      {openSettings && (
        <SettingsModal open={openSettings} setOpenSettings={setOpenSettings} />
      )}
    </Card>
  );
};

export default Sidebar;
