import React from 'react';
import { Route, Redirect } from 'react-router-dom';
/**
 * HOC implementation for conditional rendering
 * 
 */
export const PrivateRoute = ({ component: Component, auth,...rest }) =>{
return (
        
    <Route {...rest} render={props => (
      // ( auth.user!==undefined && auth.user!==false)
      localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)
}