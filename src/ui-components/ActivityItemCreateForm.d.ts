/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ActivityItemCreateFormInputValues = {
    title?: string;
    description?: string;
    dateTime?: string;
    location?: string;
    residence?: string;
};
export declare type ActivityItemCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    dateTime?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    residence?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActivityItemCreateFormOverridesProps = {
    ActivityItemCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextAreaFieldProps>;
    dateTime?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    residence?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ActivityItemCreateFormProps = React.PropsWithChildren<{
    overrides?: ActivityItemCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ActivityItemCreateFormInputValues) => ActivityItemCreateFormInputValues;
    onSuccess?: (fields: ActivityItemCreateFormInputValues) => void;
    onError?: (fields: ActivityItemCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ActivityItemCreateFormInputValues) => ActivityItemCreateFormInputValues;
    onValidate?: ActivityItemCreateFormValidationValues;
} & React.CSSProperties>;
export default function ActivityItemCreateForm(props: ActivityItemCreateFormProps): React.ReactElement;
