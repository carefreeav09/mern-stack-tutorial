import React from 'react';
import { withRouter, Switch } from 'react-router-dom';

import PublicRoute from '../../routes/PublicRoute';
import PrivateRoute from '../../routes/PrivateRoute';

import {
    AsyncLayout,
    AsyncHome,
    AsyncLoginForm,
    AsyncAuthLayout,
    AsyncSignUpForm
} from "./AsyncComponent";

const NotFound = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <h1 className="display-1">
                404 not found
            </h1>
        </div>
    )
}

const App = () =>(
    <React.Fragment>
        <Switch>
            <PrivateRoute exact path='/' layout={AsyncLayout} component={AsyncHome}/>
            <PublicRoute exact path='/login' layout={AsyncAuthLayout} component={AsyncLoginForm}/>
            <PublicRoute exact path='/register' layout={AsyncAuthLayout} component={AsyncSignUpForm}/>
            <PublicRoute path='/*' layout={AsyncAuthLayout} component={NotFound}/>
        </Switch>
    </React.Fragment>
);

export default withRouter(App);

