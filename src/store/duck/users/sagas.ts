import { call, put } from 'redux-saga/effects';

import {
 createAccountSuccess, createAccountFailure,
} from './actions';
import * as service from './services';

import { User } from '../../../models';

export function* createAccount(user: User) {
  try {
    const newUser = yield call(service.createUser, user);
    return yield put(createAccountSuccess(newUser));
  } catch (error) {
    return yield put(createAccountFailure(error.message));
  }
}
