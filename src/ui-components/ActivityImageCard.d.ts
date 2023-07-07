/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
import { ActivityCardProps } from "./ActivityCard";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActivityImageCardOverridesProps = {
    ActivityImageCard?: PrimitiveOverrideProps<ViewProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    ActivityCard?: ActivityCardProps;
} & EscapeHatchProps;
export declare type ActivityImageCardProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ActivityImageCardOverridesProps | undefined | null;
}>;
export default function ActivityImageCard(props: ActivityImageCardProps): React.ReactElement;
