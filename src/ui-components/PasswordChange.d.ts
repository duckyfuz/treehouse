/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, PasswordFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PasswordChangeInputValues = {
    CurrentPass?: string;
    NewPass?: string;
    ConfirmPass?: string;
};
export declare type PasswordChangeValidationValues = {
    CurrentPass?: ValidationFunction<string>;
    NewPass?: ValidationFunction<string>;
    ConfirmPass?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PasswordChangeOverridesProps = {
    PasswordChangeGrid?: PrimitiveOverrideProps<GridProps>;
    CurrentPass?: PrimitiveOverrideProps<PasswordFieldProps>;
    NewPass?: PrimitiveOverrideProps<PasswordFieldProps>;
    ConfirmPass?: PrimitiveOverrideProps<PasswordFieldProps>;
} & EscapeHatchProps;
export declare type PasswordChangeProps = React.PropsWithChildren<{
    overrides?: PasswordChangeOverridesProps | undefined | null;
} & {
    onSubmit: (fields: PasswordChangeInputValues) => void;
    onChange?: (fields: PasswordChangeInputValues) => PasswordChangeInputValues;
    onValidate?: PasswordChangeValidationValues;
} & React.CSSProperties>;
export default function PasswordChange(props: PasswordChangeProps): React.ReactElement;
