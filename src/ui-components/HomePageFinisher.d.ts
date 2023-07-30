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
export declare type HomePageFinisherOverridesProps = {
    HomePageFinisher?: PrimitiveOverrideProps<FlexProps>;
    Container?: PrimitiveOverrideProps<FlexProps>;
    Message39605309?: PrimitiveOverrideProps<FlexProps>;
    Message39605310?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<TextProps>;
    Body?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type HomePageFinisherProps = React.PropsWithChildren<Partial<FlexProps> & {
    createAccountHandler?: (event: SyntheticEvent) => void;
    buttonText?: String;
} & {
    type?: "Intro";
} & {
    overrides?: HomePageFinisherOverridesProps | undefined | null;
}>;
export default function HomePageFinisher(props: HomePageFinisherProps): React.ReactElement;
