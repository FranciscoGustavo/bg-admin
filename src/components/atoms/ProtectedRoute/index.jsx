import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ auth, ...rest }) => {
  if (auth) return <Route {...rest} />;
  return <Redirect to="/login" />;
};

export default ProtectedRoute;
