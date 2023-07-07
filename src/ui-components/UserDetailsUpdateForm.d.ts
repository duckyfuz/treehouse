/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UserDetails } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserDetailsUpdateFormInputValues = {
    name?: string;
    onBoarded?: boolean;
    activitiesAttended?: string[];
    activitiesHosted?: string[];
    profilePicture?: string;
    residence?: string[];
};
export declare type UserDetailsUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    onBoarded?: ValidationFunction<boolean>;
    activitiesAttended?: ValidationFunction<string>;
    activitiesHosted?: ValidationFunction<string>;
    profilePicture?: ValidationFunction<string>;
    residence?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserDetailsUpdateFormOverridesProps = {
    UserDetailsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    onBoarded?: PrimitiveOverrideProps<SwitchFieldProps>;
    activitiesAttended?: PrimitiveOverrideProps<TextFieldProps>;
    activitiesHosted?: PrimitiveOverrideProps<TextFieldProps>;
    profilePicture?: PrimitiveOverrideProps<TextFieldProps>;
    residence?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type UserDetailsUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserDetailsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userDetails?: UserDetails;
    onSubmit?: (fields: UserDetailsUpdateFormInputValues) => UserDetailsUpdateFormInputValues;
    onSuccess?: (fields: UserDetailsUpdateFormInputValues) => void;
    onError?: (fields: UserDetailsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserDetailsUpdateFormInputValues) => UserDetailsUpdateFormInputValues;
    onValidate?: UserDetailsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserDetailsUpdateForm(props: UserDetailsUpdateFormProps): React.ReactElement;
