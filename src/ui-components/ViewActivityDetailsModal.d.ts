/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ViewActivityDetailsModalOverridesProps = {
    ViewActivityDetailsModal?: PrimitiveOverrideProps<FlexProps>;
    "Product Title"?: PrimitiveOverrideProps<FlexProps>;
    "ACTIVITY TITLE"?: PrimitiveOverrideProps<TextProps>;
    LOCATION?: PrimitiveOverrideProps<TextProps>;
    "Card Area29766753"?: PrimitiveOverrideProps<FlexProps>;
    "Card Area39001901"?: PrimitiveOverrideProps<FlexProps>;
    "Main Text39001902"?: PrimitiveOverrideProps<FlexProps>;
    "DATE AND TIME"?: PrimitiveOverrideProps<TextProps>;
    Button39001905?: PrimitiveOverrideProps<ButtonProps>;
    Button39001917?: PrimitiveOverrideProps<ButtonProps>;
    PARTICIPANTS?: PrimitiveOverrideProps<TextProps>;
    "PARTICIPANTS LIST"?: PrimitiveOverrideProps<TextProps>;
    "Main Text29766754"?: PrimitiveOverrideProps<FlexProps>;
    "DETAILS:"?: PrimitiveOverrideProps<TextProps>;
    "DETAILS FILL"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ViewActivityDetailsModalProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ViewActivityDetailsModalOverridesProps | undefined | null;
}>;
export default function ViewActivityDetailsModal(props: ViewActivityDetailsModalProps): React.ReactElement;
