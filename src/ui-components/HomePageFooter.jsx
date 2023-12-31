/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function HomePageFooter(props) {
  const { subscribeHandler, overrides, ...rest } = props;
  return (
    <Flex
      gap="32px"
      direction="column"
      width="1440px"
      height="210px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="40px 40px 40px 40px"
      backgroundColor="rgba(188,236,245,1)"
      {...getOverrideProps(overrides, "HomePageFooter")}
      {...rest}
    >
      <Flex
        gap="16px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="space-between"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "TopContainer")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "NewsletterContainer")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="600"
            color="rgba(48,64,80,1)"
            lineHeight="30px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="471px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Sign up for our newsletter"
            {...getOverrideProps(overrides, "Sign up for our newsletter")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="471px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="No spam. We promise."
            {...getOverrideProps(overrides, "No spam. We promise.")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "SubscribeContainer")}
        >
          <Flex
            gap="8px"
            direction="column"
            width="300px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "EmailContainer")}
          >
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
              {...getOverrideProps(overrides, "InputContainer")}
            >
              <Flex
                gap="10px"
                direction="column"
                width="300px"
                height="unset"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                position="relative"
                border="1px SOLID rgba(174,179,183,1)"
                borderRadius="4px"
                padding="7px 15px 7px 15px"
                {...getOverrideProps(overrides, "Input")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(128,128,128,1)"
                  lineHeight="24px"
                  textAlign="left"
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
                  children="Your email"
                  {...getOverrideProps(overrides, "placeholder")}
                ></Text>
              </Flex>
            </Flex>
          </Flex>
          <Button
            width="187px"
            height="40px"
            shrink="0"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Subscribe"
            onClick={subscribeHandler}
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
      </Flex>
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "FooterContainer")}
      >
        <Flex
          gap="8px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "MadeContainer")}
        >
          <Text
            fontFamily="Inter"
            fontSize="18px"
            fontWeight="500"
            color="rgba(48,64,80,1)"
            lineHeight="27px"
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
            children="Made with AWS Amplify"
            {...getOverrideProps(overrides, "Made with AWS Amplify")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="500"
            color="rgba(48,64,80,1)"
            lineHeight="18px"
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
            children="(and lots of time)"
            {...getOverrideProps(overrides, "(and lots of time)")}
          ></Text>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(102,112,133,1)"
          lineHeight="24px"
          textAlign="right"
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
          children="© 2023 duckyfuz. All rights reserved."
          {...getOverrideProps(
            overrides,
            "\u00A9 2023 duckyfuz. All rights reserved."
          )}
        ></Text>
      </Flex>
    </Flex>
  );
}
