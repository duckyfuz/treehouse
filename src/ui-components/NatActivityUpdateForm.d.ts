/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { NatActivity } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NatActivityUpdateFormInputValues = {
    title?: string;
    dateTime?: string;
    location?: string;
};
export declare type NatActivityUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    dateTime?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NatActivityUpdateFormOverridesProps = {
    NatActivityUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    dateTime?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NatActivityUpdateFormProps = React.PropsWithChildren<{
    overrides?: NatActivityUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    natActivity?: NatActivity;
    onSubmit?: (fields: NatActivityUpdateFormInputValues) => NatActivityUpdateFormInputValues;
    onSuccess?: (fields: NatActivityUpdateFormInputValues) => void;
    onError?: (fields: NatActivityUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NatActivityUpdateFormInputValues) => NatActivityUpdateFormInputValues;
    onValidate?: NatActivityUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NatActivityUpdateForm(props: NatActivityUpdateFormProps): React.ReactElement;
