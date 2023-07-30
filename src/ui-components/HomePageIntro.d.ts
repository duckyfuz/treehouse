/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomePageIntroOverridesProps = {
    HomePageIntro?: PrimitiveOverrideProps<FlexProps>;
    LeftContainer?: PrimitiveOverrideProps<FlexProps>;
    MessageContainer?: PrimitiveOverrideProps<FlexProps>;
    Message?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<TextProps>;
    Body?: PrimitiveOverrideProps<TextProps>;
    DashboardButton?: PrimitiveOverrideProps<ButtonProps>;
    ImageSlot?: PrimitiveOverrideProps<FlexProps>;
    Image?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type HomePageIntroProps = React.PropsWithChildren<Partial<FlexProps> & {
    image?: String;
    getStartedHandler?: (event: SyntheticEvent) => void;
} & {
    type?: "Intro";
} & {
    overrides?: HomePageIntroOverridesProps | undefined | null;
}>;
export default function HomePageIntro(props: HomePageIntroProps): React.ReactElement;
