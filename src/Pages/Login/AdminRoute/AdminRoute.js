import { CircularProgress } from '@mui/material';
import React from 'react';
import { Route, Redirect,} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const {user, admin, loding} = useAuth();
    if(loding) {
        return <CircularProgress />
    }
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect  /* Navigate  Redirect*/
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default AdminRoute;