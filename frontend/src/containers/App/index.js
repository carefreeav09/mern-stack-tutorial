import React from 'react';
import { withRouter, Switch } from 'react-router-dom';

import PublicRoute from '../../routes/PublicRoute';

import {
    AsyncLayout,
    AsyncHome,
} from "./AsyncComponent";

const App = () =>(
    <React.Fragment>
        <Switch>
            <PublicRoute exact path='/' layout={AsyncLayout} component={AsyncHome}/>
        </Switch>
    </React.Fragment>
);

export default withRouter(App);

