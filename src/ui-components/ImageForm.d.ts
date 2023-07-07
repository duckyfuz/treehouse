/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps } from "@aws-amplify/ui-react";
import { StorageManagerProps } from "@aws-amplify/ui-react-storage";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ImageFormInputValues = {
    Field1?: string;
    Field0?: string;
};
export declare type ImageFormValidationValues = {
    Field1?: ValidationFunction<string>;
    Field0?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ImageFormOverridesProps = {
    ImageFormGrid?: PrimitiveOverrideProps<GridProps>;
    Field1?: PrimitiveOverrideProps<AutocompleteProps>;
    Field0?: PrimitiveOverrideProps<StorageManagerProps>;
} & EscapeHatchProps;
export declare type ImageFormProps = React.PropsWithChildren<{
    overrides?: ImageFormOverridesProps | undefined | null;
} & {
    onSubmit: (fields: ImageFormInputValues) => void;
    onCancel?: () => void;
    onChange?: (fields: ImageFormInputValues) => ImageFormInputValues;
    onValidate?: ImageFormValidationValues;
} & React.CSSProperties>;
export default function ImageForm(props: ImageFormProps): React.ReactElement;
