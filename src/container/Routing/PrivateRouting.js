import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Islogin from '../Isloging/Islogin';
import { useSelector } from "react-redux";

function PrivateRouting({ component: Component, ...rest }) {

    const auth = useSelector(state => state.auth);

    return (
        <Route {...rest}
            render={props => (
                auth.user !== null ?
                    <Component {...props} />
                    :
                    <Redirect to='/Login' />

            )
            }
        />
    );
}

export default PrivateRouting;