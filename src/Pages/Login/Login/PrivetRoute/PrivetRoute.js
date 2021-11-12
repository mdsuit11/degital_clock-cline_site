import { CircularProgress } from '@mui/material';
import React from 'react';
import { Route, Redirect, Navigate } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
    const {user, loding} = useAuth();
    if(loding) {
        return <CircularProgress />
    }
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect  /* Navigate  Redirect*/
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivetRoute;