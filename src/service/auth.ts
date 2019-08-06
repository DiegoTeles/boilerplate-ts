import * as jwt from 'jsonwebtoken';
import { StorageType } from '../models/Storage';
import { Token } from '../models/Token';

export const getToken = () => {
  const token = localStorage.getItem(StorageType.USER_TOKEN);
  if (!token) return null;

  const tokenDecoded = jwt.decode(token);
  const { exp } = tokenDecoded as Record<string, any>;
  const currentTime = Date.now() / 1000;
  if (currentTime > exp) {
    localStorage.removeItem(StorageType.USER_TOKEN);
    return null;
  }

  return token;
};

export const isAuthenticated = () => getToken() !== null;

export const login = (token: string) => localStorage.setItem(StorageType.USER_TOKEN, token);

export const logout = () => localStorage.removeItem(StorageType.USER_TOKEN);

export const getUser = () => {
  const token = getToken();
  if (!token) return null;

  const tokenDecoded = jwt.decode(token);
  const { customer: user } = tokenDecoded as Record<string, any>;
  if (user) return user as Token;

  return null;
};