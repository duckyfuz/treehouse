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
    TopContainer?: PrimitiveOverrideProps<FlexProps>;
    TitileLocationContainer?: PrimitiveOverrideProps<FlexProps>;
    ActivityTitle?: PrimitiveOverrideProps<TextProps>;
    Location?: PrimitiveOverrideProps<TextProps>;
    ExitButton?: PrimitiveOverrideProps<ButtonProps>;
    DetailsTimeContainer?: PrimitiveOverrideProps<FlexProps>;
    DetailsContainer?: PrimitiveOverrideProps<FlexProps>;
    "Details:"?: PrimitiveOverrideProps<TextProps>;
    DetailsActual?: PrimitiveOverrideProps<TextProps>;
    DateTimeContainer?: PrimitiveOverrideProps<FlexProps>;
    DateTime?: PrimitiveOverrideProps<TextProps>;
    ButtonsContainer?: PrimitiveOverrideProps<FlexProps>;
    AttendButton?: PrimitiveOverrideProps<ButtonProps>;
    ContactButton?: PrimitiveOverrideProps<ButtonProps>;
    PeopleContainer?: PrimitiveOverrideProps<FlexProps>;
    HostContainer?: PrimitiveOverrideProps<FlexProps>;
    HostName?: PrimitiveOverrideProps<TextProps>;
    ParticipantsContainer?: PrimitiveOverrideProps<FlexProps>;
    "Participants:"?: PrimitiveOverrideProps<TextProps>;
    ParticipantsSlot?: PrimitiveOverrideProps<FlexProps>;
    ParticipantsList?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FutureActivityModalProps = React.PropsWithChildren<Partial<FlexProps> & {
    activityItem?: ActivityItem;
    exitHandler?: (event: SyntheticEvent) => void;
    attendHandler?: (event: SyntheticEvent) => void;
    contactHandler?: (event: SyntheticEvent) => void;
    participantsSlot?: React.ReactNode;
    location?: String;
    dateTime?: String;
    hostName?: String;
} & {
    overrides?: FutureActivityModalOverridesProps | undefined | null;
}>;
export default function FutureActivityModal(props: FutureActivityModalProps): React.ReactElement;
