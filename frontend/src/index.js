import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider
} from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import App from "./containers/App";
import configureStore, { history } from "./store/configureStore";
// import { AuthProvider } from "./components/Layout/Header/AuthContext";

const store = configureStore();
const mountNode = document.getElementById("root");

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3f51b5"
    },
    secondary: red
  },
  status: {
    danger: "orange"
  }
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router history={history}>
        <ThemeProvider theme={responsiveFontSizes(theme)}>
          {/* <AuthProvider> */}
            <App />
          {/* </AuthProvider> */}
        </ThemeProvider>
      </Router>
    </ConnectedRouter>
  </Provider>,
  mountNode
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
