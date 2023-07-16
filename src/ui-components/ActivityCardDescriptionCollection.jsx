/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { ActivityItem } from "../models";
import { SortDirection } from "@aws-amplify/datastore";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import ActivityCardDescription from "./ActivityCardDescription";
import { Collection } from "@aws-amplify/ui-react";
export default function ActivityCardDescriptionCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = { sort: (s) => s.dateTime(SortDirection.ASCENDING) };
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: ActivityItem,
    pagination: itemsPagination,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="grid"
      isSearchable="true"
      isPaginated={true}
      searchPlaceholder="Find your next activity!"
      itemsPerPage={3}
      templateRows="1fr"
      autoFlow="column"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "ActivityCardDescriptionCollection")}
      {...rest}
    >
      {(item, index) => (
        <ActivityCardDescription
          activityItem={item}
          width="28rem"
          margin="0rem 1rem 0rem 0px"
          height="auto"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></ActivityCardDescription>
      )}
    </Collection>
  );
}
