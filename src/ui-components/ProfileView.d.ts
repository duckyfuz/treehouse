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
    ProfileContainer?: PrimitiveOverrideProps<FlexProps>;
    ImageSlot?: PrimitiveOverrideProps<FlexProps>;
    ProfilePicture?: PrimitiveOverrideProps<ImageProps>;
    ChangePictureButton?: PrimitiveOverrideProps<ButtonProps>;
    TextContainer?: PrimitiveOverrideProps<FlexProps>;
    UsernameContainer?: PrimitiveOverrideProps<FlexProps>;
    UsernameLabel?: PrimitiveOverrideProps<TextProps>;
    Username?: PrimitiveOverrideProps<TextProps>;
    ResidenceContainer?: PrimitiveOverrideProps<FlexProps>;
    ResidenceLabel?: PrimitiveOverrideProps<TextProps>;
    Residence?: PrimitiveOverrideProps<TextProps>;
    ButtonsContainer?: PrimitiveOverrideProps<FlexProps>;
    EditProfileButton?: PrimitiveOverrideProps<ButtonProps>;
    ChangePassButton?: PrimitiveOverrideProps<ButtonProps>;
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
