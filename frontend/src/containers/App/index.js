import React from 'react';
import { withRouter, Switch } from 'react-router-dom';

import PublicRoute from '../../routes/PublicRoute';
import MainLayout from '../../components/Layout/Layout/';

import {
    AsyncHome,
} from "./AsyncComponent";

const App = () =>(
    <React.Fragment>
        <Switch>
            <PublicRoute exact path='/' layout={MainLayout} component={AsyncHome}/>
        </Switch>
    </React.Fragment>
);

export default withRouter(App);

