/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function ProfileView(props) {
  const {
    changePictureHandler,
    profilePictureURL,
    residences,
    editProfileHandler,
    changePasswordHandler,
    userDetails,
    overrides,
    ...rest
  } = props;
  return (
    <Flex
      gap="12px"
      direction="column"
      width="640px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ProfileView")}
      {...rest}
    >
      <Flex
        gap="12px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Container")}
      >
        <Flex
          gap="32px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "ProfileContainer")}
        >
          <Flex
            padding="0px 0px 0px 0px"
            width="100px"
            height="100px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "ImageSlot")}
          >
            <Image
              width="100px"
              height="100px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0px"
              left="0px"
              borderRadius="40px"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              src={profilePictureURL}
              {...getOverrideProps(overrides, "ProfilePicture")}
            ></Image>
          </Flex>
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Change Profile Picture"
            onClick={changePictureHandler}
            {...getOverrideProps(overrides, "ChangePictureButton")}
          ></Button>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "TextContainer")}
        >
          <Flex
            gap="8px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "UsernameContainer")}
          >
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="30px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Username:"
              {...getOverrideProps(overrides, "UsernameLabel")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="22px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="33px"
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
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={userDetails?.preferedName}
              {...getOverrideProps(overrides, "Username")}
            ></Text>
          </Flex>
          <Flex
            gap="8px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "ResidenceContainer")}
          >
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="30px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Residence(s):"
              {...getOverrideProps(overrides, "ResidenceLabel")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="22px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="33px"
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
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={residences}
              {...getOverrideProps(overrides, "Residence")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="24px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="space-between"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "ButtonsContainer")}
        >
          <Button
            width="unset"
            height="unset"
            justifyContent="flex-start"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Edit Profile"
            onClick={editProfileHandler}
            {...getOverrideProps(overrides, "EditProfileButton")}
          ></Button>
          <Button
            width="unset"
            height="unset"
            justifyContent="flex-end"
            shrink="0"
            backgroundColor="rgba(149,4,4,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Change Password"
            onClick={changePasswordHandler}
            {...getOverrideProps(overrides, "ChangePassButton")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
