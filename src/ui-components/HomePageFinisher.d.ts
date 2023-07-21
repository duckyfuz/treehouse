/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomePageFinisherOverridesProps = {
    HomePageFinisher?: PrimitiveOverrideProps<FlexProps>;
    "Type Lock Up"?: PrimitiveOverrideProps<FlexProps>;
    "Main Body"?: PrimitiveOverrideProps<FlexProps>;
    "Together, we can and will thrive."?: PrimitiveOverrideProps<TextProps>;
    "At Treehouse, we firmly believe that together, we can create a brighter future. By fostering a vibrant and inclusive community spirit, we can tackle challenges as one, support each other through thick and thin, and celebrate triumphs collectively. Join the Treehouse movement today and be a part of something extraordinary \u2013 a thriving community where neighbours become friends and memories are cherished forever. Together, let's keep the kampong spirit alive and thriving in the heart of modern Singapore."?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type HomePageFinisherProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: HomePageFinisherOverridesProps | undefined | null;
}>;
export default function HomePageFinisher(props: HomePageFinisherProps): React.ReactElement;
