/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconNameProps } from "./IconName";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IconNameParticipantsOverridesProps = {
    IconNameParticipants?: PrimitiveOverrideProps<ViewProps>;
    IconName?: IconNameProps;
    "5 other participants..."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type IconNameParticipantsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: IconNameParticipantsOverridesProps | undefined | null;
}>;
export default function IconNameParticipants(props: IconNameParticipantsProps): React.ReactElement;
