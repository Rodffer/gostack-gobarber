import React from 'react';
import { RouteProps as ReactRouteProps, Route as ReactRoute, Redirect} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface ReactProps extends ReactRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<ReactProps> = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    <ReactRoute {...rest} render={({ location }) => {
      return isPrivate === !!user ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: isPrivate ? '/' : '/dashboard', state: { from: location}, }}/>
      )
    }}
    />
  )
};

export default Route;
