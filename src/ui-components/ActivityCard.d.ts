/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ActivityItem } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { IconNameParticipantsProps } from "./IconNameParticipants";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActivityCardOverridesProps = {
    ActivityCard?: PrimitiveOverrideProps<FlexProps>;
    "Frame 417"?: PrimitiveOverrideProps<FlexProps>;
    "Product Title"?: PrimitiveOverrideProps<FlexProps>;
    "ACTIVITY TITLE"?: PrimitiveOverrideProps<TextProps>;
    "DATE AND TIME"?: PrimitiveOverrideProps<TextProps>;
    LOCATION?: PrimitiveOverrideProps<TextProps>;
    IconNameParticipants?: IconNameParticipantsProps;
} & EscapeHatchProps;
export declare type ActivityCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    activityItem?: ActivityItem;
    frame437?: React.ReactNode;
} & {
    overrides?: ActivityCardOverridesProps | undefined | null;
}>;
export default function ActivityCard(props: ActivityCardProps): React.ReactElement;
