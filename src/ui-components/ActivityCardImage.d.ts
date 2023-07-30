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
export declare type ActivityCardImageOverridesProps = {
    ActivityCardImage?: PrimitiveOverrideProps<FlexProps>;
    ImageSlot?: PrimitiveOverrideProps<FlexProps>;
    Image?: PrimitiveOverrideProps<ImageProps>;
    Container?: PrimitiveOverrideProps<FlexProps>;
    DetailsContainer?: PrimitiveOverrideProps<FlexProps>;
    ActivityTitle?: PrimitiveOverrideProps<TextProps>;
    DateLocationContainer?: PrimitiveOverrideProps<FlexProps>;
    DateTime?: PrimitiveOverrideProps<TextProps>;
    Location?: PrimitiveOverrideProps<TextProps>;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ActivityCardImageProps = React.PropsWithChildren<Partial<FlexProps> & {
    activityItem?: ActivityItem;
    moreDetailsHandler?: (event: SyntheticEvent) => void;
    dateTime?: String;
    location?: String;
    image?: String;
    group1?: React.ReactNode;
} & {
    overrides?: ActivityCardImageOverridesProps | undefined | null;
}>;
export default function ActivityCardImage(props: ActivityCardImageProps): React.ReactElement;
