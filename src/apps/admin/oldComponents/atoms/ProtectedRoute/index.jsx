import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ auth, ...rest }) => {
  if (auth) return <Route {...rest} />;
  return <Redirect to="/login" />;
};

ProtectedRoute.propTypes = {
  auth: PropTypes.bool.isRequired,
};

export default ProtectedRoute;
