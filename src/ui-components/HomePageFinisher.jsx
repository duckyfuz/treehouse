/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function HomePageFinisher(props) {
  const { createAccountHandler, overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Heading: {},
        Body: {},
        Message: {},
        Button: {},
        HeroMessage: {},
        Left: {},
        HomePageFinisher: {},
      },
      variantValues: { type: "Intro" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="row"
      width="1440px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(239,240,240,1)"
      display="flex"
      {...getOverrideProps(overrides, "HomePageFinisher")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="1051px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="40px 120px 40px 120px"
        backgroundColor="rgba(0,0,0,0)"
        display="flex"
        {...getOverrideProps(overrides, "Left")}
      >
        <Flex
          gap="12px"
          direction="column"
          width="840px"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "HeroMessage")}
        >
          <Flex
            gap="16px"
            direction="column"
            width="800px"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Message")}
          >
            <Text
              fontFamily="Inter"
              fontSize="24px"
              fontWeight="600"
              color="rgba(13,26,38,1)"
              lineHeight="30px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="528px"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Together, we will thrive."
              {...getOverrideProps(overrides, "Heading")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="At Treehouse, we firmly believe that together, we can create a brighter future. By fostering a vibrant and inclusive community spirit, we can tackle challenges as one, support each other through thick and thin, and celebrate triumphs collectively.&#xA;&#xA;Join the Treehouse movement today and be a part of something extraordinary – a thriving community where neighbours become friends and memories are cherished forever. Together, let's keep the kampong spirit alive and thriving in the heart of modern Singapore.&#xA;"
              {...getOverrideProps(overrides, "Body")}
            ></Text>
          </Flex>
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Create an Account"
            onClick={createAccountHandler}
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
