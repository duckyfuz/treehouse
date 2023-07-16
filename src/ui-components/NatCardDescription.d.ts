/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { NatActivity } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NatCardDescriptionOverridesProps = {
    NatCardDescription?: PrimitiveOverrideProps<FlexProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    Text?: PrimitiveOverrideProps<FlexProps>;
    Headline?: PrimitiveOverrideProps<FlexProps>;
    "This is the Activity Name"?: PrimitiveOverrideProps<TextProps>;
    Frame?: PrimitiveOverrideProps<FlexProps>;
    "Date and Time"?: PrimitiveOverrideProps<TextProps>;
    "Location of Event"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NatCardDescriptionProps = React.PropsWithChildren<Partial<FlexProps> & {
    natActivity?: NatActivity;
} & {
    overrides?: NatCardDescriptionOverridesProps | undefined | null;
}>;
export default function NatCardDescription(props: NatCardDescriptionProps): React.ReactElement;
