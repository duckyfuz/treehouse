/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NatActivityCreateFormInputValues = {
    title?: string;
    dateTime?: string;
    location?: string;
};
export declare type NatActivityCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    dateTime?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NatActivityCreateFormOverridesProps = {
    NatActivityCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    dateTime?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NatActivityCreateFormProps = React.PropsWithChildren<{
    overrides?: NatActivityCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NatActivityCreateFormInputValues) => NatActivityCreateFormInputValues;
    onSuccess?: (fields: NatActivityCreateFormInputValues) => void;
    onError?: (fields: NatActivityCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NatActivityCreateFormInputValues) => NatActivityCreateFormInputValues;
    onValidate?: NatActivityCreateFormValidationValues;
} & React.CSSProperties>;
export default function NatActivityCreateForm(props: NatActivityCreateFormProps): React.ReactElement;
