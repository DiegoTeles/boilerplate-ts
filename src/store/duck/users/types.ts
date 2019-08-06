
export enum UserTypes {
  CREATE = '@user/CREATE',
  CREATE_SUCCESS = '@user/CREATE_SUCCESS',
  CREATE_FAILURE = '@user/CREATE_FAILURE',
  SET_USER = '@user/SET_USER',
  CLEAR_USER = '@user/CLEAR_USER'
}

export interface Group {
  _id: string
  name: string
  system: string
  description: string
  roles: string[]
}

export interface SystemRoles {
  system: string,
  systemRoles: string[]
}

export interface User {
  _id: string;
  name: string;
  username: string;
  email: string;
  verified: boolean;
  isActive: boolean;
  status?: any;
}

export interface UserState {
  readonly created: boolean;
  readonly loading: boolean;
  readonly data: User[];
  readonly error: string;
}