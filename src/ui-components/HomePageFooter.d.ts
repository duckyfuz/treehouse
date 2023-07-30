/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomePageFooterOverridesProps = {
    HomePageFooter?: PrimitiveOverrideProps<FlexProps>;
    TopContainer?: PrimitiveOverrideProps<FlexProps>;
    NewsletterContainer?: PrimitiveOverrideProps<FlexProps>;
    "Sign up for our newsletter"?: PrimitiveOverrideProps<TextProps>;
    "No spam. We promise."?: PrimitiveOverrideProps<TextProps>;
    SubscribeContainer?: PrimitiveOverrideProps<FlexProps>;
    EmailContainer?: PrimitiveOverrideProps<FlexProps>;
    InputContainer?: PrimitiveOverrideProps<FlexProps>;
    Input?: PrimitiveOverrideProps<FlexProps>;
    placeholder?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    FooterContainer?: PrimitiveOverrideProps<FlexProps>;
    MadeContainer?: PrimitiveOverrideProps<FlexProps>;
    "Made with AWS Amplify"?: PrimitiveOverrideProps<TextProps>;
    "(and lots of time)"?: PrimitiveOverrideProps<TextProps>;
    "\u00A9 2023 duckyfuz. All rights reserved."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HomePageFooterProps = React.PropsWithChildren<Partial<FlexProps> & {
    subscribeHandler?: (event: SyntheticEvent) => void;
} & {
    overrides?: HomePageFooterOverridesProps | undefined | null;
}>;
export default function HomePageFooter(props: HomePageFooterProps): React.ReactElement;
