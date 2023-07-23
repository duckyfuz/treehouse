/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ViewActivityModalOverridesProps = {
    ViewActivityModal?: PrimitiveOverrideProps<FlexProps>;
    ViewActivityModal39821710?: PrimitiveOverrideProps<FlexProps>;
    "Product Title"?: PrimitiveOverrideProps<FlexProps>;
    "ACTIVITY TITLE"?: PrimitiveOverrideProps<TextProps>;
    LOCATION?: PrimitiveOverrideProps<TextProps>;
    "Details Area"?: PrimitiveOverrideProps<FlexProps>;
    "Main Text39821722"?: PrimitiveOverrideProps<FlexProps>;
    "DETAILS:"?: PrimitiveOverrideProps<TextProps>;
    "DETAILS FILL"?: PrimitiveOverrideProps<TextProps>;
    "Card Area39821725"?: PrimitiveOverrideProps<FlexProps>;
    "DATE AND TIME"?: PrimitiveOverrideProps<TextProps>;
    ImageSlot?: PrimitiveOverrideProps<FlexProps>;
    Button39831748?: PrimitiveOverrideProps<ButtonProps>;
    Button39831749?: PrimitiveOverrideProps<ButtonProps>;
    "Card Area39821727"?: PrimitiveOverrideProps<FlexProps>;
    "Main Text39821728"?: PrimitiveOverrideProps<FlexProps>;
    "HOST: hostname"?: PrimitiveOverrideProps<TextProps>;
    "Main Text39821730"?: PrimitiveOverrideProps<FlexProps>;
    "PARTICIPANTS:"?: PrimitiveOverrideProps<TextProps>;
    "Participants Slot"?: PrimitiveOverrideProps<FlexProps>;
    "PARTICIPANTS LIST"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ViewActivityModalProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ViewActivityModalOverridesProps | undefined | null;
}>;
export default function ViewActivityModal(props: ViewActivityModalProps): React.ReactElement;
