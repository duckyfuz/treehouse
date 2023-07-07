import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum Residence {
  BLK111 = "BLK111",
  BLK112 = "BLK112",
  BLK222 = "BLK222",
  BLK223 = "BLK223",
  BLK333 = "BLK333"
}



type EagerUserDetails = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserDetails, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly onBoarded?: boolean | null;
  readonly activitiesAttended?: (string | null)[] | null;
  readonly activitiesHosted?: (string | null)[] | null;
  readonly profilePicture?: string | null;
  readonly residence?: (Residence | null)[] | keyof typeof Residence | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserDetails = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserDetails, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly onBoarded?: boolean | null;
  readonly activitiesAttended?: (string | null)[] | null;
  readonly activitiesHosted?: (string | null)[] | null;
  readonly profilePicture?: string | null;
  readonly residence?: (Residence | null)[] | keyof typeof Residence | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserDetails = LazyLoading extends LazyLoadingDisabled ? EagerUserDetails : LazyUserDetails

export declare const UserDetails: (new (init: ModelInit<UserDetails>) => UserDetails) & {
  copyOf(source: UserDetails, mutator: (draft: MutableModel<UserDetails>) => MutableModel<UserDetails> | void): UserDetails;
}

type EagerActivityItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ActivityItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly dateTime: string;
  readonly participants?: (string | null)[] | null;
  readonly images?: (string | null)[] | null;
  readonly location?: string | null;
  readonly hostName?: string | null;
  readonly residence?: Residence | keyof typeof Residence | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyActivityItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ActivityItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly dateTime: string;
  readonly participants?: (string | null)[] | null;
  readonly images?: (string | null)[] | null;
  readonly location?: string | null;
  readonly hostName?: string | null;
  readonly residence?: Residence | keyof typeof Residence | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ActivityItem = LazyLoading extends LazyLoadingDisabled ? EagerActivityItem : LazyActivityItem

export declare const ActivityItem: (new (init: ModelInit<ActivityItem>) => ActivityItem) & {
  copyOf(source: ActivityItem, mutator: (draft: MutableModel<ActivityItem>) => MutableModel<ActivityItem> | void): ActivityItem;
}