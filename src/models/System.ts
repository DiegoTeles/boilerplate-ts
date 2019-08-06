import { Group } from './Group';

export interface System {
  _id: string;
  name: string;
  description: string;
  roles: string[];
  isActive: boolean;
}

export interface GroupSystem {
  _id: string;
  system: string;
  name: string;
  description: string;
  roles: string[];
}

export interface SystemFeature {
  _id: string;
  name: string;
  groups: Group[];
  roles: string[];
  isActive: boolean;
}
