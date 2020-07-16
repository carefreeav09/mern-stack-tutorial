import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AuthContext} from "../contexts/auth"

const PrivateRoute = ({component: Component, layout: Layout, ...rest}) => {
    const authContextData = useContext(AuthContext);

    return (
                <Route
                    {...rest}
                    render={props =>
                        authContextData.authenticated ?
                            <Layout><Component {...props} /></Layout>
                            :
                            <Redirect to={{
                                pathname: '/login',
                                state: {from: props.location}
                            }}/>
                    }
                />
            )
};

export default PrivateRoute;
