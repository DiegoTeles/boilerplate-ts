import { restore } from './storage';
import { StorageType } from '../models/Storage';

export const defaultHeaders = () => {
  return {
    'x-system-access': 'GAIA',
    Authorization: `Bearer ${restore(StorageType.USER_TOKEN)}`,
    'Content-Type': 'application/json'
  };
};
