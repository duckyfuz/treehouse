/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserDetails = /* GraphQL */ `
  query GetUserDetails($id: ID!) {
    getUserDetails(id: $id) {
      id
      name
      onBoarded
      activitiesAttended
      activitiesHosted
      profilePicture
      residence
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listUserDetails = /* GraphQL */ `
  query ListUserDetails(
    $filter: ModelUserDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        onBoarded
        activitiesAttended
        activitiesHosted
        profilePicture
        residence
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUserDetails = /* GraphQL */ `
  query SyncUserDetails(
    $filter: ModelUserDetailsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserDetails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        onBoarded
        activitiesAttended
        activitiesHosted
        profilePicture
        residence
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getActivityItem = /* GraphQL */ `
  query GetActivityItem($id: ID!) {
    getActivityItem(id: $id) {
      id
      title
      description
      dateTime
      participants
      images
      location
      hostName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listActivityItems = /* GraphQL */ `
  query ListActivityItems(
    $filter: ModelActivityItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActivityItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        dateTime
        participants
        images
        location
        hostName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncActivityItems = /* GraphQL */ `
  query SyncActivityItems(
    $filter: ModelActivityItemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncActivityItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        description
        dateTime
        participants
        images
        location
        hostName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
