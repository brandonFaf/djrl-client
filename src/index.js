import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// eslint-disable-next-line
import firebase from "./data/firebase.js";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import RequestStore from "./Contexts/RequestsStore";
import ViewStore from "./Contexts/ViewStore";

ReactDOM.render(
  <ViewStore>
    <RequestStore>
      <App />
    </RequestStore>
  </ViewStore>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
