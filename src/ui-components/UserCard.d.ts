/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserCardOverridesProps = {
    UserCard?: PrimitiveOverrideProps<FlexProps>;
    Image?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Name?: PrimitiveOverrideProps<FlexProps>;
    "Melinda Marcus"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type UserCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    profilePic?: String;
    name?: String;
} & {
    overrides?: UserCardOverridesProps | undefined | null;
}>;
export default function UserCard(props: UserCardProps): React.ReactElement;
