/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function HomePageFinisher(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="1600px"
      height="428px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="60px 240px 60px 240px"
      backgroundColor="rgba(239,240,240,1)"
      {...getOverrideProps(overrides, "HomePageFinisher")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Type Lock Up")}
      >
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Main Body")}
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
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Together, we can and will thrive."
            {...getOverrideProps(
              overrides,
              "Together, we can and will thrive."
            )}
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
            width="798px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="At Treehouse, we firmly believe that together, we can create a brighter future. By fostering a vibrant and inclusive community spirit, we can tackle challenges as one, support each other through thick and thin, and celebrate triumphs collectively.&#xA;&#xA;Join the Treehouse movement today and be a part of something extraordinary – a thriving community where neighbours become friends and memories are cherished forever. Together, let's keep the kampong spirit alive and thriving in the heart of modern Singapore.&#xA;"
            {...getOverrideProps(
              overrides,
              "At Treehouse, we firmly believe that together, we can create a brighter future. By fostering a vibrant and inclusive community spirit, we can tackle challenges as one, support each other through thick and thin, and celebrate triumphs collectively. Join the Treehouse movement today and be a part of something extraordinary \u2013 a thriving community where neighbours become friends and memories are cherished forever. Together, let's keep the kampong spirit alive and thriving in the heart of modern Singapore."
            )}
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
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
