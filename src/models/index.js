// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Residence = {
  "BLK111": "BLK111",
  "BLK112": "BLK112",
  "BLK222": "BLK222",
  "BLK223": "BLK223",
  "BLK333": "BLK333"
};

const { NatActivity, UserDetails, ActivityItem } = initSchema(schema);

export {
  NatActivity,
  UserDetails,
  ActivityItem,
  Residence
};