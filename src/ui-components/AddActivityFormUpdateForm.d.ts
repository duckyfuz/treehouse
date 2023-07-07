/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AddActivityForm } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AddActivityFormUpdateFormInputValues = {
    title?: string;
    description?: string;
    Field0?: string;
};
export declare type AddActivityFormUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    Field0?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddActivityFormUpdateFormOverridesProps = {
    AddActivityFormUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AddActivityFormUpdateFormProps = React.PropsWithChildren<{
    overrides?: AddActivityFormUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    addActivityForm?: AddActivityForm;
    onSubmit?: (fields: AddActivityFormUpdateFormInputValues) => AddActivityFormUpdateFormInputValues;
    onSuccess?: (fields: AddActivityFormUpdateFormInputValues) => void;
    onError?: (fields: AddActivityFormUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AddActivityFormUpdateFormInputValues) => AddActivityFormUpdateFormInputValues;
    onValidate?: AddActivityFormUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AddActivityFormUpdateForm(props: AddActivityFormUpdateFormProps): React.ReactElement;
