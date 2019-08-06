import { Reducer } from 'redux';
import { UserTypes, UserState as CustomerState } from './types';
import { User, Group, SystemRoles } from '../../../models/User';

const INITIAL_ROLES: SystemRoles = {
  system: '',
  systemRoles: ''
};

const INITIAL_GROUP: Group = {
  _id: '',
  name: '',
  system: '',
  description: '',
  roles: [INITIAL_ROLES]
};

const INITIAL_USERS: User = {
  _id: '',
  name: '',
  username: '',
  email: '',
  verified: false,
  isActive: false,
  status: '',
  groups: [INITIAL_GROUP],
  roles: [INITIAL_GROUP]
};
const INITIAL_STATE: any = {
  data: INITIAL_USERS,
  created: false,
  loading: false,
  error: ''
};

const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case UserTypes.CREATE:
      return {
        ...state,
        loading: true
      };
    case UserTypes.CREATE_SUCCESS:
      return {
        ...state,
        created: true,
        data: action.payload || INITIAL_STATE,
        loading: false
      };
    case UserTypes.CREATE_FAILURE:
      return {
        ...state,
        data: INITIAL_STATE,
        loading: false,
        error: action.payload.message
      };
    case UserTypes.SET_USER:
      return {
        ...state,
        data: action.payload
      };
    case UserTypes.CLEAR_USER:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
