import { Flex, Icon, Button } from "@aws-amplify/ui-react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const ColorModeToggle = ({ mode, onModeChange }) => {
  let buttonIcon = mode === "light" ? MdLightMode : MdDarkMode;

  return (
    <Flex gap={0}>
      <Button
        size="small"
        padding="0.5rem"
        onClick={() =>
          mode === "light" ? onModeChange("dark") : onModeChange("light")
        }
      >
        <Icon
          fontSize="1.25rem"
          ariaLabel="Color mode selection"
          as={buttonIcon}
        />
      </Button>
    </Flex>
  );
};
