import * as jwt from 'jsonwebtoken';
import { StorageType } from '../models/Storage';
import { UserLoggedIn } from '../models/User';

const save = (key: StorageType, value: string) => {
  localStorage.setItem(key, value);
};

const restore = (key: StorageType): string | null => localStorage.getItem(key);

const getUserLoggedIn = () => {
  const token = restore(StorageType.USER_TOKEN);
  if (!token) return null;
  const tokenDecoded = jwt.decode(token);
  const { user } = (tokenDecoded as { [key: string]: any; });
  if (user) {
    return (user as UserLoggedIn);
  }
  return null;
};

export { save, restore, getUserLoggedIn };
