// Deprecated CAA 280723
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// import { DataStore } from "aws-amplify";
// import { Flex, Placeholder, useAuthenticator } from "@aws-amplify/ui-react";

// import { EditProfile, UserDetailsUpdateForm } from "../ui-components";

// import { UserDetails } from "../models";

// import { useUserObserver } from "../hooks/useUser";

// export const Settings = () => {
//   const { user, authStatus } = useAuthenticator((context) => [context.user]);

//   const userDets = useUserObserver();
//   const navigate = useNavigate();

//   // Onboarding checks
//   useEffect(() => {
//     if (authStatus === "authenticated") {
//       if (userDets && !userDets.onBoarded) {
//         navigate("/onboarding");
//       }
//       async function getOnBoardingStatus() {
//         const userDetails = await DataStore.query(UserDetails, (c) =>
//           c.name.eq(user.username)
//         );
//         if (userDetails.length === 0) {
//           navigate("/onboarding");
//         }
//       }
//       if (user) {
//         getOnBoardingStatus();
//       }
//     }
//   }, [navigate, userDets, authStatus, user]);

//   return (
//     <Flex
//       direction={"column"}
//       alignContent={"center"}
//       justifyContent={"flex-start"}
//       alignItems={"center"}
//       width={"100rem"}
//     >
//       {userDets && (
//         <UserDetailsUpdateForm
//           width={"90rem"}
//           id={userDets.id}
//           onSubmit={(fields) => {
//             const updatedFields = {};
//             Object.keys(fields).forEach((key) => {
//               if (typeof fields[key] === "string") {
//                 updatedFields[key] = fields[key].trim();
//               } else {
//                 updatedFields[key] = fields[key];
//               }
//             });
//             updatedFields["residence"] = [...new Set(fields.residence)];
//             return updatedFields;
//           }}
//           onSuccess={() => {
//             console.log("submitted");
//           }}
//         />
//         // <EditProfile />
//       )}
//     </Flex>
//   );
// };
