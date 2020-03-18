import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './HomeContainer'

const Home = ({ match }) => (
    <Fragment>
        <Switch>
            <Route exact path={`${match.url}/`} component={Main} />
            {/*<Route component={NotFound} />*/}
        </Switch>
    </Fragment>
);

export default Home;
