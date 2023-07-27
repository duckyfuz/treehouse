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
    "Product Title"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    "ACTIVITY TITLE"?: PrimitiveOverrideProps<TextProps>;
    LOCATION?: PrimitiveOverrideProps<TextProps>;
    Button39831756?: PrimitiveOverrideProps<ButtonProps>;
    ImageSlot39821654?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    ImageSlot39821668?: PrimitiveOverrideProps<FlexProps>;
    Button39831738?: PrimitiveOverrideProps<ButtonProps>;
    Button39831743?: PrimitiveOverrideProps<ButtonProps>;
    "Details Area"?: PrimitiveOverrideProps<FlexProps>;
    "Main Text39821645"?: PrimitiveOverrideProps<FlexProps>;
    "DETAILS:"?: PrimitiveOverrideProps<TextProps>;
    "DETAILS FILL"?: PrimitiveOverrideProps<TextProps>;
    "Card Area39821638"?: PrimitiveOverrideProps<FlexProps>;
    "DATE AND TIME"?: PrimitiveOverrideProps<TextProps>;
    "Card Area39821676"?: PrimitiveOverrideProps<FlexProps>;
    "Main Text39821677"?: PrimitiveOverrideProps<FlexProps>;
    "HOST: hostname"?: PrimitiveOverrideProps<TextProps>;
    "Main Text39821683"?: PrimitiveOverrideProps<FlexProps>;
    "PARTICIPANTS:"?: PrimitiveOverrideProps<TextProps>;
    "Participants Slot"?: PrimitiveOverrideProps<FlexProps>;
    "PARTICIPANTS LIST"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ArchiveDetailsModalProps = React.PropsWithChildren<Partial<FlexProps> & {
    activityItem?: ActivityItem;
    viewPicturesHandler?: (event: SyntheticEvent) => void;
    sharePicturesHandler?: (event: SyntheticEvent) => void;
    imageSlot39821654?: React.ReactNode;
    buttonFrame?: React.ReactNode;
    exitHandler?: (event: SyntheticEvent) => void;
    participantsSlot?: React.ReactNode;
} & {
    overrides?: ArchiveDetailsModalOverridesProps | undefined | null;
}>;
export default function ArchiveDetailsModal(props: ArchiveDetailsModalProps): React.ReactElement;
