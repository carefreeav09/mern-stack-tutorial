import React from "react";
import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "./assets/css/styles.css";

import * as serviceWorker from "./serviceWorker";

import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import App from "./containers/App";
import configureStore, { history } from "./store/configureStore";

const store = configureStore();
const mountNode = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router history={history}>
          {/* <AuthProvider> */}
            <App />
          {/* </AuthProvider> */}
      </Router>
    </ConnectedRouter>
  </Provider>,
  mountNode
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
