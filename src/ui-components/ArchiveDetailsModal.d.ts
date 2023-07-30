/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ActivityItem } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ArchiveDetailsModalOverridesProps = {
    ArchiveDetailsModal?: PrimitiveOverrideProps<FlexProps>;
    TopContainer?: PrimitiveOverrideProps<FlexProps>;
    TitleLocationContainer?: PrimitiveOverrideProps<FlexProps>;
    ActivityTitle?: PrimitiveOverrideProps<TextProps>;
    Location?: PrimitiveOverrideProps<TextProps>;
    ExitButton?: PrimitiveOverrideProps<ButtonProps>;
    ImageSlot?: PrimitiveOverrideProps<FlexProps>;
    Image?: PrimitiveOverrideProps<ImageProps>;
    ButtonsContainer?: PrimitiveOverrideProps<FlexProps>;
    ViewButton?: PrimitiveOverrideProps<ButtonProps>;
    ShareButton?: PrimitiveOverrideProps<ButtonProps>;
    DetailsDateContainer?: PrimitiveOverrideProps<FlexProps>;
    DetailsContainer?: PrimitiveOverrideProps<FlexProps>;
    "Details:"?: PrimitiveOverrideProps<TextProps>;
    DetailsActual?: PrimitiveOverrideProps<TextProps>;
    DateTimeContainer?: PrimitiveOverrideProps<FlexProps>;
    DateTime?: PrimitiveOverrideProps<TextProps>;
    PeopleContainer?: PrimitiveOverrideProps<FlexProps>;
    HostContainer?: PrimitiveOverrideProps<FlexProps>;
    HostName?: PrimitiveOverrideProps<TextProps>;
    ParticipantsContainer?: PrimitiveOverrideProps<FlexProps>;
    "Participants:"?: PrimitiveOverrideProps<TextProps>;
    ParticipantsSlot?: PrimitiveOverrideProps<FlexProps>;
    ParticipantsList?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ArchiveDetailsModalProps = React.PropsWithChildren<Partial<FlexProps> & {
    activityItem?: ActivityItem;
    viewPicturesHandler?: (event: SyntheticEvent) => void;
    sharePicturesHandler?: (event: SyntheticEvent) => void;
    buttonFrame?: React.ReactNode;
    exitHandler?: (event: SyntheticEvent) => void;
    participantsSlot?: React.ReactNode;
    location?: String;
    imageSlot39821654?: React.ReactNode;
    dateTime?: String;
    hostName?: String;
} & {
    overrides?: ArchiveDetailsModalOverridesProps | undefined | null;
}>;
export default function ArchiveDetailsModal(props: ArchiveDetailsModalProps): React.ReactElement;
