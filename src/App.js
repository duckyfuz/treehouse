import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Notifications } from "aws-amplify";
import {
  defaultDarkModeOverride,
  Flex,
  ThemeProvider,
} from "@aws-amplify/ui-react";

import { Home } from "./routes/Home";
import { Login } from "./routes/Login";
import { OnBoarding } from "./routes/OnBoarding";
import { Dashboard } from "./routes/Dashboard";
import { Archive } from "./routes/Archive";
import { Settings } from "./routes/Settings";

import { SideLayout } from "./components/Layout/SideLayout";

import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  InAppMessageDisplay,
  InAppMessagingProvider,
} from "@aws-amplify/ui-react-notifications";
import { ToastContainer } from "react-toastify";

const { InAppMessaging } = Notifications;

function App() {
  useEffect(() => {
    InAppMessaging.syncMessages();
  }, []);

  // For future dark mode implementation
  const theme = {
    name: "app-theme",
    overrides: [defaultDarkModeOverride],
  };

  return (
    <InAppMessagingProvider>
      <InAppMessageDisplay />
      <ThemeProvider theme={theme}>
        <Flex height={"100vh"}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<SideLayout />}>
                <Route path="/onboarding" element={<OnBoarding />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/archive" element={<Archive />} />
                {/* <Route path="/settings" element={<Settings />} /> */}
              </Route>
              <Route path="*" element={<p>Page Not Found</p>} />
            </Routes>
          </BrowserRouter>
        </Flex>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </ThemeProvider>
    </InAppMessagingProvider>
  );
}

export default App;
