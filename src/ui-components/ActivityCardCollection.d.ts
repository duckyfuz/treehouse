/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ActivityCardProps } from "./ActivityCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActivityCardCollectionOverridesProps = {
    ActivityCardCollection?: PrimitiveOverrideProps<CollectionProps>;
    ActivityCard?: ActivityCardProps;
} & EscapeHatchProps;
export declare type ActivityCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => ActivityCardProps;
} & {
    overrides?: ActivityCardCollectionOverridesProps | undefined | null;
}>;
export default function ActivityCardCollection(props: ActivityCardCollectionProps): React.ReactElement;
