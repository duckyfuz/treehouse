/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { StorageManagerProps } from "@aws-amplify/ui-react-storage";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UserDetails } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ChangeProfilePicInputValues = {
    profilePicture?: string;
};
export declare type ChangeProfilePicValidationValues = {
    profilePicture?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChangeProfilePicOverridesProps = {
    ChangeProfilePicGrid?: PrimitiveOverrideProps<GridProps>;
    profilePicture?: PrimitiveOverrideProps<StorageManagerProps>;
} & EscapeHatchProps;
export declare type ChangeProfilePicProps = React.PropsWithChildren<{
    overrides?: ChangeProfilePicOverridesProps | undefined | null;
} & {
    id?: string;
    userDetails?: UserDetails;
    onSubmit?: (fields: ChangeProfilePicInputValues) => ChangeProfilePicInputValues;
    onSuccess?: (fields: ChangeProfilePicInputValues) => void;
    onError?: (fields: ChangeProfilePicInputValues, errorMessage: string) => void;
    onChange?: (fields: ChangeProfilePicInputValues) => ChangeProfilePicInputValues;
    onValidate?: ChangeProfilePicValidationValues;
} & React.CSSProperties>;
export default function ChangeProfilePic(props: ChangeProfilePicProps): React.ReactElement;
