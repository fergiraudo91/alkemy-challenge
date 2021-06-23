import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    localStorage.setItem('lastPath', rest.location.pathname);
    const token = localStorage.getItem('token');
    return (
       <Route
       component = {(props) => (
           (isAuthenticated && token)
           ? <Component {...props}/>
           : <Redirect to="/login" />
       )}
       {...rest}
       />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
