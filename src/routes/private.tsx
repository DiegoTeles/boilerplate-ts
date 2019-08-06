import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import jwt from 'jsonwebtoken';

interface DecodedToken {
  email: String;
  type: Number;
  iat: Number;
  expt: Number;
}

function isAuth(): Boolean {
  const token = localStorage.getItem('token');
  try {
    // @ts-ignore
    const decodedToken: DecodedToken = jwt.verify(token, 'rusbe');
    if (
      decodedToken.type === 4 ||
      decodedToken.type === 2 ||
      decodedToken.type === 3
    ) {
      return true;
    }
  } catch (e) {}

  return false;
}

const PrivateRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}: any) => (
  <Route
    {...rest}
    render={props =>
      isAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

export default PrivateRoute;
