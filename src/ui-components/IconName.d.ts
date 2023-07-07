/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { UserDetails } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IconNameOverridesProps = {
    IconName?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    USERNAME?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type IconNameProps = React.PropsWithChildren<Partial<FlexProps> & {
    userDetails?: UserDetails;
} & {
    overrides?: IconNameOverridesProps | undefined | null;
}>;
export default function IconName(props: IconNameProps): React.ReactElement;
