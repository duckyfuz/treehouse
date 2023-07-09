/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function ActivityCard(props) {
  const { activityItem, overrides, ...rest } = props;
  const activityCardOnClick = useNavigateAction({
    type: "url",
    url: activityItem?.id,
  });
  return (
    <Flex
      gap="16px"
      direction="row"
      width="480px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="10px"
      padding="16px 16px 16px 16px"
      backgroundColor="rgba(255,255,255,1)"
      onClick={() => {
        activityCardOnClick();
      }}
      {...getOverrideProps(overrides, "ActivityCard")}
      {...rest}
    >
      <Flex
        gap="12px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "HostDetails")}
      >
        <Flex
          gap="2px"
          direction="column"
          width="280px"
          height="80px"
          justifyContent="center"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Product Title")}
        >
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
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
            whiteSpace=""
            isTruncated={true}
            children={activityItem?.title}
            {...getOverrideProps(overrides, "ACTIVITY TITLE")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="18px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.03px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace=""
            isTruncated={true}
            children="DATE AND TIME"
            {...getOverrideProps(overrides, "DATE AND TIME")}
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
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace={true}
            isTruncated={true}
            children="LOCATION"
            {...getOverrideProps(overrides, "LOCATION")}
          ></Text>
        </Flex>
        <Flex
          gap="2px"
          direction="column"
          width="150px"
          height="60px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Main Text")}
        >
          <Text
            fontFamily="Inter"
            fontSize="18px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
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
            whiteSpace=""
            isTruncated={true}
            children="USERNAME"
            {...getOverrideProps(overrides, "USERNAME")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace=""
            isTruncated={true}
            children="5 other participants..."
            {...getOverrideProps(overrides, "5 other participants...")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
