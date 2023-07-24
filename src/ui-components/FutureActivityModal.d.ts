/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ActivityItem } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FutureActivityModalOverridesProps = {
    FutureActivityModal?: PrimitiveOverrideProps<FlexProps>;
    "Product Title"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    "ACTIVITY TITLE"?: PrimitiveOverrideProps<TextProps>;
    LOCATION?: PrimitiveOverrideProps<TextProps>;
    Button39911774?: PrimitiveOverrideProps<ButtonProps>;
    "Details Area"?: PrimitiveOverrideProps<FlexProps>;
    "Main Text39911779"?: PrimitiveOverrideProps<FlexProps>;
    "DETAILS:"?: PrimitiveOverrideProps<TextProps>;
    "DETAILS FILL"?: PrimitiveOverrideProps<TextProps>;
    "Card Area39911782"?: PrimitiveOverrideProps<FlexProps>;
    "DATE AND TIME"?: PrimitiveOverrideProps<TextProps>;
    ImageSlot?: PrimitiveOverrideProps<FlexProps>;
    Button39831748?: PrimitiveOverrideProps<ButtonProps>;
    Button39831749?: PrimitiveOverrideProps<ButtonProps>;
    "Card Area39911784"?: PrimitiveOverrideProps<FlexProps>;
    "Main Text39911785"?: PrimitiveOverrideProps<FlexProps>;
    "HOST: hostname"?: PrimitiveOverrideProps<TextProps>;
    "Main Text39911787"?: PrimitiveOverrideProps<FlexProps>;
    "PARTICIPANTS:"?: PrimitiveOverrideProps<TextProps>;
    "Participants Slot"?: PrimitiveOverrideProps<FlexProps>;
    "PARTICIPANTS LIST"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FutureActivityModalProps = React.PropsWithChildren<Partial<FlexProps> & {
    activityItem?: ActivityItem;
    exitHandler?: (event: SyntheticEvent) => void;
    attendHandler?: (event: SyntheticEvent) => void;
    contactHandler?: (event: SyntheticEvent) => void;
} & {
    overrides?: FutureActivityModalOverridesProps | undefined | null;
}>;
export default function FutureActivityModal(props: FutureActivityModalProps): React.ReactElement;
