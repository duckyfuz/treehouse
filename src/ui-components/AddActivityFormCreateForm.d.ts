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
export declare type AddActivityFormCreateFormInputValues = {
    title?: string;
    description?: string;
    Field0?: string;
};
export declare type AddActivityFormCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    Field0?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddActivityFormCreateFormOverridesProps = {
    AddActivityFormCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AddActivityFormCreateFormProps = React.PropsWithChildren<{
    overrides?: AddActivityFormCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AddActivityFormCreateFormInputValues) => AddActivityFormCreateFormInputValues;
    onSuccess?: (fields: AddActivityFormCreateFormInputValues) => void;
    onError?: (fields: AddActivityFormCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AddActivityFormCreateFormInputValues) => AddActivityFormCreateFormInputValues;
    onValidate?: AddActivityFormCreateFormValidationValues;
} & React.CSSProperties>;
export default function AddActivityFormCreateForm(props: AddActivityFormCreateFormProps): React.ReactElement;
