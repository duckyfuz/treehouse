/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import IconName from "./IconName";
import { Text, View } from "@aws-amplify/ui-react";
export default function IconNameParticipants(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="130px"
      height="35px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "IconNameParticipants")}
      {...rest}
    >
      <IconName
        display="flex"
        gap="2px"
        direction="row"
        width="130px"
        height="20px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0%"
        bottom="42.86%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "IconName")}
      ></IconName>
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="400"
        color="rgba(13,26,38,1)"
        lineHeight="20px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="130px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="48.57%"
        bottom="-5.71%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="5 other participants..."
        {...getOverrideProps(overrides, "5 other participants...")}
      ></Text>
    </View>
  );
}
