/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { UserDetails } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfileViewOverridesProps = {
    ProfileView?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    TextField40581897?: PrimitiveOverrideProps<FlexProps>;
    label40581898?: PrimitiveOverrideProps<TextProps>;
    placeholder40581896?: PrimitiveOverrideProps<TextProps>;
    Profile?: PrimitiveOverrideProps<FlexProps>;
    ImageSlot?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Button40581892?: PrimitiveOverrideProps<ButtonProps>;
    TextField40581904?: PrimitiveOverrideProps<FlexProps>;
    label40581905?: PrimitiveOverrideProps<TextProps>;
    placeholder40581906?: PrimitiveOverrideProps<TextProps>;
    "Frame 2"?: PrimitiveOverrideProps<FlexProps>;
    Button29766926?: PrimitiveOverrideProps<ButtonProps>;
    Button40581886?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ProfileViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    changePictureHandler?: (event: SyntheticEvent) => void;
    profilePictureURL?: String;
    residences?: String;
    editProfileHandler?: (event: SyntheticEvent) => void;
    changePasswordHandler?: (event: SyntheticEvent) => void;
    userDetails?: UserDetails;
} & {
    overrides?: ProfileViewOverridesProps | undefined | null;
}>;
export default function ProfileView(props: ProfileViewProps): React.ReactElement;
