import { useNavigate, Outlet } from "react-router-dom";

import { useAuthenticator, Flex } from "@aws-amplify/ui-react";
import { DataStore } from "@aws-amplify/datastore";

import { Sidebar } from "./Sidebar";

export function SideLayout() {
  const navigate = useNavigate();
  const { route, signOut } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);

  function logOut() {
    signOut();
    DataStore.clear();
    navigate("/");
  }

  return (
    <>
      <Sidebar loggedIn={route === "authenticated"} logOut={logOut} />
      <Outlet />
    </>
  );
}
