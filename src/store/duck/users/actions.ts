import { UserTypes } from './types';
// import { actions } from 'typesafe-actions'
import { User } from '../../../models';

export const saveUser = (payload: User[]) => ({
  type: UserTypes.SET_USER,
  payload
});
export const clearUser = () => ({
  type: UserTypes.CLEAR_USER
});

export const createAccount = (payload: User[]) => ({
  type: UserTypes.CREATE,
  payload
});
export const createAccountSuccess = (payload: User[]) => ({
  type: UserTypes.CREATE_SUCCESS,
  payload
});
export const createAccountFailure = (e: any) => ({
  type: UserTypes.CREATE_FAILURE
});
