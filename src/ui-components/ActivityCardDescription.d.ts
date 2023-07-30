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
export declare type ActivityCardDescriptionOverridesProps = {
    ActivityCardDescription?: PrimitiveOverrideProps<FlexProps>;
    DetailsContainer?: PrimitiveOverrideProps<FlexProps>;
    ActivityTitle?: PrimitiveOverrideProps<TextProps>;
    DateLocationContainer?: PrimitiveOverrideProps<FlexProps>;
    DateTime?: PrimitiveOverrideProps<TextProps>;
    Location?: PrimitiveOverrideProps<TextProps>;
    PeopleContainer?: PrimitiveOverrideProps<FlexProps>;
    HostName?: PrimitiveOverrideProps<TextProps>;
    ParticipantsNo?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ActivityCardDescriptionProps = React.PropsWithChildren<Partial<FlexProps> & {
    activityItem?: ActivityItem;
    dateTime?: String;
    location?: String;
    participants?: String;
    moreDetailsHandler?: (event: SyntheticEvent) => void;
} & {
    overrides?: ActivityCardDescriptionOverridesProps | undefined | null;
}>;
export default function ActivityCardDescription(props: ActivityCardDescriptionProps): React.ReactElement;
