import { useEffect, useState } from "react";
import { SideLayout } from "./components/SideLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  defaultDarkModeOverride,
  Flex,
  ThemeProvider,
} from "@aws-amplify/ui-react";

import "@aws-amplify/ui-react/styles.css";
import "./App.css";

import { Home } from "./routes/Home";
import { OnBoarding } from "./routes/OnBoarding";
import { Dashboard } from "./routes/Dashboard";
import { Settings } from "./routes/Settings";
import { Login } from "./routes/Login";

import { Notifications } from "aws-amplify";

const { InAppMessaging } = Notifications;

function App() {
  useEffect(() => {
    InAppMessaging.syncMessages();
  }, []);

  const theme = {
    name: "app-theme",
    overrides: [defaultDarkModeOverride],
  };

  return (
    <ThemeProvider theme={theme}>
      <Flex height={"100vh"}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<SideLayout />}>
              <Route path="/onboarding" element={<OnBoarding />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
            <Route path="*" element={<p>Page Not Found</p>} />
          </Routes>
        </BrowserRouter>
      </Flex>
    </ThemeProvider>
  );
}

export default App;
