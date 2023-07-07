/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserDetails = /* GraphQL */ `
  mutation CreateUserDetails(
    $input: CreateUserDetailsInput!
    $condition: ModelUserDetailsConditionInput
  ) {
    createUserDetails(input: $input, condition: $condition) {
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
export const updateUserDetails = /* GraphQL */ `
  mutation UpdateUserDetails(
    $input: UpdateUserDetailsInput!
    $condition: ModelUserDetailsConditionInput
  ) {
    updateUserDetails(input: $input, condition: $condition) {
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
export const deleteUserDetails = /* GraphQL */ `
  mutation DeleteUserDetails(
    $input: DeleteUserDetailsInput!
    $condition: ModelUserDetailsConditionInput
  ) {
    deleteUserDetails(input: $input, condition: $condition) {
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
export const createActivityItem = /* GraphQL */ `
  mutation CreateActivityItem(
    $input: CreateActivityItemInput!
    $condition: ModelActivityItemConditionInput
  ) {
    createActivityItem(input: $input, condition: $condition) {
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
export const updateActivityItem = /* GraphQL */ `
  mutation UpdateActivityItem(
    $input: UpdateActivityItemInput!
    $condition: ModelActivityItemConditionInput
  ) {
    updateActivityItem(input: $input, condition: $condition) {
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
export const deleteActivityItem = /* GraphQL */ `
  mutation DeleteActivityItem(
    $input: DeleteActivityItemInput!
    $condition: ModelActivityItemConditionInput
  ) {
    deleteActivityItem(input: $input, condition: $condition) {
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
