/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function UserCard(props) {
  const { profilePic, name, overrides, ...rest } = props;
  return (
    <Flex
      gap="4px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "UserCard")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="column"
        width="25px"
        height="25px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Image")}
      >
        <Image
          width="unset"
          height="unset"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          borderRadius="6px"
          padding="0px 0px 0px 0px"
          objectFit="contain"
          src={profilePic}
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </Flex>
      <Flex
        gap="8px"
        direction="row"
        width="150px"
        height="35px"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        alignContent="center"
        {...getOverrideProps(overrides, "Name")}
      >
        <Text
          fontFamily="Inter"
          fontSize="25px"
          fontWeight="400"
          color="rgba(12,28,43,1)"
          lineHeight="25px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf={true}
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace={true}
          isTruncated={true}
          children={name}
          {...getOverrideProps(overrides, "Melinda Marcus")}
        ></Text>
      </Flex>
    </Flex>
  );
}
