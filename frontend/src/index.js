import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider
} from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import red from "@material-ui/core/colors/red";


const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#3f51b5'
    },
    secondary: red
  },
  status: {
    danger: "orange"
  }
});


ReactDOM.render(
  <ThemeProvider theme={responsiveFontSizes(theme)}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
