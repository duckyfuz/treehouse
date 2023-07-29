/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DividerProps, GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { StorageManagerProps } from "@aws-amplify/ui-react-storage";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UserDetails } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OnboardingFormInputValues = {
    preferedName?: string;
    profilePicture?: string;
    residence?: string[];
    onBoarded?: boolean;
};
export declare type OnboardingFormValidationValues = {
    preferedName?: ValidationFunction<string>;
    profilePicture?: ValidationFunction<string>;
    residence?: ValidationFunction<string>;
    onBoarded?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OnboardingFormOverridesProps = {
    OnboardingFormGrid?: PrimitiveOverrideProps<GridProps>;
    preferedName?: PrimitiveOverrideProps<TextFieldProps>;
    profilePicture?: PrimitiveOverrideProps<StorageManagerProps>;
    SectionalElement0?: PrimitiveOverrideProps<DividerProps>;
    residence?: PrimitiveOverrideProps<SelectFieldProps>;
    onBoarded?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type OnboardingFormProps = React.PropsWithChildren<{
    overrides?: OnboardingFormOverridesProps | undefined | null;
} & {
    id?: string;
    userDetails?: UserDetails;
    onSubmit?: (fields: OnboardingFormInputValues) => OnboardingFormInputValues;
    onSuccess?: (fields: OnboardingFormInputValues) => void;
    onError?: (fields: OnboardingFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OnboardingFormInputValues) => OnboardingFormInputValues;
    onValidate?: OnboardingFormValidationValues;
} & React.CSSProperties>;
export default function OnboardingForm(props: OnboardingFormProps): React.ReactElement;
