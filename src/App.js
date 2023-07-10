import { useEffect, useState } from "react";
import { AuthGuard } from "./AuthGuard";
import { Home } from "./routes/Home";
import { Layout } from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Authenticator,
  defaultDarkModeOverride,
  Flex,
  ThemeProvider,
  withInAppMessaging,
} from "@aws-amplify/ui-react";

import "@aws-amplify/ui-react/styles.css";

import "./App.css";
import { OnBoarding } from "./routes/OnBoarding";
import { Dashboard } from "./routes/Dashboard";
import { Settings } from "./routes/Settings";
import { Notifications } from "aws-amplify";

const { InAppMessaging } = Notifications;

function MyRoutes({ mode, onModeChange }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout mode={mode} onModeChange={onModeChange} />}
        >
          <Route index element={<Home />} />
          <Route
            path="/onboarding"
            element={
              <AuthGuard>
                <OnBoarding />
              </AuthGuard>
            }
          />
          <Route
            path="/dashboard"
            element={
              <AuthGuard>
                <Dashboard />
              </AuthGuard>
            }
          />
          <Route
            path="/settings"
            element={
              <AuthGuard>
                <Settings />
              </AuthGuard>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  const theme = {
    name: "app-theme",
    overrides: [defaultDarkModeOverride],
  };

  const getSavedColorMode = () => {
    return localStorage.getItem("color-mode") || "system";
  };
  const saveColorMode = (value) => {
    localStorage.setItem("color-mode", value);
  };
  const [colorMode, setColorMode] = useState(getSavedColorMode());
  const onColorModeChange = (value) => {
    saveColorMode(value);
    setColorMode(value);
  };

  useEffect(() => {
    InAppMessaging.syncMessages();
  }, []);

  return (
    <ThemeProvider theme={theme} colorMode={colorMode}>
      <Authenticator>
        <Flex justifyContent={"center"}>
          <MyRoutes mode={colorMode} onModeChange={onColorModeChange} />
        </Flex>
      </Authenticator>
    </ThemeProvider>
  );
}

export default withInAppMessaging(App, {});
