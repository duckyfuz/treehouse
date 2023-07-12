import { Flex, Button, Menu, MenuItem, Text } from "@aws-amplify/ui-react";

import { GiHamburgerMenu } from "react-icons/gi";

import { ColorModeToggle } from "./ColorModeSelector";

// NEED TO REMOVE USER.USERNAME SOMEHOW FROM HERE

// const TreeHouse = ({ onClick }) => {
//   const [activitiesCount, setActivitiesCount] = useState("-");
//   const [imageURL, setImageURL] = useState();

//   useEffect(() => {
//     async function getDetails() {
//       const imageURL = await Storage.get(user.profilePicture);
//       setActivitiesCount(
//         user.activitiesAttended.length + user.activitiesHosted.length
//       );
//       setImageURL(imageURL);
//     }
//     getDetails();
//   }, []);

//   return (
//     <Flex
//       gap="0.5rem"
//       justifyContent="center"
//       alignItems="center"
//       onClick={() => onClick("settings")}
//       margin={"0.5rem"}
//     >
//       <Image src={imageURL} height="50px" width="50px" borderRadius={"10px"} />
//       <Flex direction="column" gap="0rem" justifyContent="center">
//         <Text fontWeight={750} fontSize={"20px"}>
//           {user.name}
//         </Text>
//         <Text fontSize={"12px"}>{activitiesCount} activities attended!</Text>
//       </Flex>
//     </Flex>
//   );
// };

export function Toolbar({ loggedIn, mode, onClick }) {
  return (
    <Flex
      alignItems="center"
      position="relative"
      justifyContent="space-between"
    >
      {/* <TreeHouse onClick={onClick} /> */}
      {!loggedIn ? (
        <Text>Make an account now!</Text>
      ) : (
        <Text>Welcome User!</Text>
      )}
      <Flex alignItems="center">
        <ColorModeToggle
          mode={mode}
          onModeChange={(value) => onClick("mode", value)}
        />
        {!loggedIn ? (
          <Button
            variation="primary"
            onClick={() => onClick("login")}
            size="large"
          >
            Login
          </Button>
        ) : (
          <Flex gap={0}>
            <Menu
              menuAlign="end"
              trigger={
                <Button variation="menu" padding="0">
                  <GiHamburgerMenu fontSize="2.5rem" />
                </Button>
              }
            >
              <MenuItem onClick={() => onClick("dashboard")}>
                Dashboard
              </MenuItem>
              <MenuItem onClick={() => onClick("logo")}>Logo</MenuItem>
              <MenuItem onClick={() => onClick("logout")}>Logout</MenuItem>
            </Menu>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
