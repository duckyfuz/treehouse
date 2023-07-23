/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { StorageManagerProps } from "@aws-amplify/ui-react-storage";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ActivityItem } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AddPhotoFormInputValues = {
    images?: string[];
};
export declare type AddPhotoFormValidationValues = {
    images?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddPhotoFormOverridesProps = {
    AddPhotoFormGrid?: PrimitiveOverrideProps<GridProps>;
    images?: PrimitiveOverrideProps<StorageManagerProps>;
} & EscapeHatchProps;
export declare type AddPhotoFormProps = React.PropsWithChildren<{
    overrides?: AddPhotoFormOverridesProps | undefined | null;
} & {
    id?: string;
    activityItem?: ActivityItem;
    onSubmit?: (fields: AddPhotoFormInputValues) => AddPhotoFormInputValues;
    onSuccess?: (fields: AddPhotoFormInputValues) => void;
    onError?: (fields: AddPhotoFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AddPhotoFormInputValues) => AddPhotoFormInputValues;
    onValidate?: AddPhotoFormValidationValues;
} & React.CSSProperties>;
export default function AddPhotoForm(props: AddPhotoFormProps): React.ReactElement;
