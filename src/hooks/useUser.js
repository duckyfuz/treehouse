import { useEffect, useState } from "react";
import { DataStore } from "@aws-amplify/datastore";

import { UserDetails } from "../models";
import { useAuthenticator } from "@aws-amplify/ui-react";

export const useUserObserver = () => {
  const [userDets, setUserDets] = useState(null);
  const { user, authStatus } = useAuthenticator((context) => [context.user]);

  const observeUser = () => {
    return DataStore.observeQuery(UserDetails, (c) =>
      c.name.eq(user.username)
    ).subscribe((snapshot) => {
      if (snapshot.items && snapshot.items.length) {
        setUserDets(snapshot.items[0]);
      }
    });
  };

  useEffect(() => {
    if (authStatus === "authenticated") {
      const userSubscription = observeUser();
      console.log(userSubscription);
      return () => {
        userSubscription.unsubscribe();
      };
    }
  }, [authStatus]);

  return userDets;
};
