import React from 'react';
import { Navigate, RouteProps, Route } from 'react-router-dom';

export interface PrivateRouteProps {}

export function PrivateRoute(props: RouteProps) {
  const isLoggedIn = Boolean(localStorage.getItem('access_token'));
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return <Route {...props} />;
}
