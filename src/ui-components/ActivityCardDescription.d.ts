/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ActivityItem } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActivityCardDescriptionOverridesProps = {
    ActivityCardDescription?: PrimitiveOverrideProps<FlexProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    Text?: PrimitiveOverrideProps<FlexProps>;
    Headline?: PrimitiveOverrideProps<FlexProps>;
    "This is the Activity Name"?: PrimitiveOverrideProps<TextProps>;
    Frame29766856?: PrimitiveOverrideProps<FlexProps>;
    "Date and Time"?: PrimitiveOverrideProps<TextProps>;
    "Location of Event"?: PrimitiveOverrideProps<TextProps>;
    Frame39251847?: PrimitiveOverrideProps<FlexProps>;
    HostName?: PrimitiveOverrideProps<TextProps>;
    ParticipantsNo?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ActivityCardDescriptionProps = React.PropsWithChildren<Partial<FlexProps> & {
    activityItem?: ActivityItem;
} & {
    overrides?: ActivityCardDescriptionOverridesProps | undefined | null;
}>;
export default function ActivityCardDescription(props: ActivityCardDescriptionProps): React.ReactElement;
