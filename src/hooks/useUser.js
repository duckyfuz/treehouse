import { useEffect, useState } from "react";
import { DataStore } from "@aws-amplify/datastore";

import { UserDetails } from "../models";
import { useAuthenticator } from "@aws-amplify/ui-react";

export const useUserObserver = () => {
  const [user, setUser] = useState(null);
  const Authenticator = useAuthenticator((context) => [context.user]);

  const observeUser = () => {
    return DataStore.observeQuery(UserDetails, (c) =>
      c.name.eq(Authenticator.user.username)
    ).subscribe((snapshot) => {
      if (snapshot.items && snapshot.items.length) {
        setUser(snapshot.items[0]);
      }
    });
  };

  useEffect(() => {
    const userSubscription = observeUser();
    return () => {
      userSubscription.unsubscribe();
    };
  }, []);

  return user;
};
