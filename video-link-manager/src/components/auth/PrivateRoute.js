import React, { useContext } from 'react';

import { AuthContext }  from '../../context/AuthContext';

//import some libraries
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => {

    const { authenticated } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={routeProps => {
                if (authenticated) {
                    return <Component {...routeProps}/>
                } else {
                    console.log('flassssseee')
                    console.log(authenticated)
                    return <Redirect to="/login"/>
                }
            }}
        />
     );
}

export default PrivateRoute;