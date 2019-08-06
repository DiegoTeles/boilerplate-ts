import { SystemFeature } from './System';

export interface SystemRoles {
  system: string;
  systemRoles?: string;
}
export interface Group {
  _id: string;
  name: string;
  system: string;
  description: string;
  roles: SystemRoles[];
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface UserLoggedIn {
  id?: string;
  name: string;
  username: string;
  email: string;
  roles: string;
  exp: number;
}

export interface UserValidation {
  token: string;
  password: string;
}

export interface UserFeature {
  _id: string;
  name: string;
  isActive: boolean | undefined;
  systems: SystemFeature[];
}

export interface UserRecover {
  username: string;
  email: string;
}
export interface User {
  _id: string;
  name: string;
  username: string;
  email: string;
  verified: boolean;
  isActive: boolean;
  status?: any;
  groups: Group[];
  roles: SystemRoles[];
}
