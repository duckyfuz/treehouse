/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { StorageManagerProps } from "@aws-amplify/ui-react-storage";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ActivityItemInputValues = {
    Field0?: string;
    Field1?: string;
    Field2?: string;
    Field3?: string;
    title?: string;
    description?: string;
    dateTime?: string;
    hostParticipants?: string[];
    images?: string[];
};
export declare type ActivityItemValidationValues = {
    Field0?: ValidationFunction<string>;
    Field1?: ValidationFunction<string>;
    Field2?: ValidationFunction<string>;
    Field3?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    dateTime?: ValidationFunction<string>;
    hostParticipants?: ValidationFunction<string>;
    images?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActivityItemOverridesProps = {
    ActivityItemGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
    Field1?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Field2?: PrimitiveOverrideProps<TextFieldProps>;
    Field3?: PrimitiveOverrideProps<StorageManagerProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    dateTime?: PrimitiveOverrideProps<TextFieldProps>;
    hostParticipants?: PrimitiveOverrideProps<TextFieldProps>;
    images?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ActivityItemProps = React.PropsWithChildren<{
    overrides?: ActivityItemOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ActivityItemInputValues) => ActivityItemInputValues;
    onSuccess?: (fields: ActivityItemInputValues) => void;
    onError?: (fields: ActivityItemInputValues, errorMessage: string) => void;
    onChange?: (fields: ActivityItemInputValues) => ActivityItemInputValues;
    onValidate?: ActivityItemValidationValues;
} & React.CSSProperties>;
export default function ActivityItem(props: ActivityItemProps): React.ReactElement;
