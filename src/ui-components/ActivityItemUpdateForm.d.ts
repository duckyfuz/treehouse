/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ActivityItem } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ActivityItemUpdateFormInputValues = {
    title?: string;
    description?: string;
    dateTime?: string;
    participants?: string[];
    images?: string[];
    location?: string;
    hostName?: string;
    residence?: string;
    host?: string;
};
export declare type ActivityItemUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    dateTime?: ValidationFunction<string>;
    participants?: ValidationFunction<string>;
    images?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    hostName?: ValidationFunction<string>;
    residence?: ValidationFunction<string>;
    host?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActivityItemUpdateFormOverridesProps = {
    ActivityItemUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    dateTime?: PrimitiveOverrideProps<TextFieldProps>;
    participants?: PrimitiveOverrideProps<TextFieldProps>;
    images?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    hostName?: PrimitiveOverrideProps<TextFieldProps>;
    residence?: PrimitiveOverrideProps<SelectFieldProps>;
    host?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ActivityItemUpdateFormProps = React.PropsWithChildren<{
    overrides?: ActivityItemUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    activityItem?: ActivityItem;
    onSubmit?: (fields: ActivityItemUpdateFormInputValues) => ActivityItemUpdateFormInputValues;
    onSuccess?: (fields: ActivityItemUpdateFormInputValues) => void;
    onError?: (fields: ActivityItemUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ActivityItemUpdateFormInputValues) => ActivityItemUpdateFormInputValues;
    onValidate?: ActivityItemUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ActivityItemUpdateForm(props: ActivityItemUpdateFormProps): React.ReactElement;
