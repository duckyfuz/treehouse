/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, View } from "@aws-amplify/ui-react";
import ActivityCard from "./ActivityCard";
export default function ActivityImageCard(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="480px"
      height="190px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ActivityImageCard")}
      {...rest}
    >
      <Image
        width="100%"
        height="47.37%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="52.63%"
        left="0%"
        right="0%"
        borderRadius="10px 10px 0px 0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <ActivityCard
        display="flex"
        gap="16px"
        direction="row"
        width="480px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="calc(50% - 56px - -45px)"
        left="0%"
        right="0%"
        borderRadius="0px 0px 10px 10px"
        padding="16px 16px 16px 16px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "ActivityCard")}
      ></ActivityCard>
    </View>
  );
}
