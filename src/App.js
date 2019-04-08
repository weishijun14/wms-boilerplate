import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import loginReducer from "./stores/reducers";

import UnauthorizedLayout from "./layout/UnanthorizedLayout";
import PrimaryLayout from "./layout/PrimaryLayout";

// TODO: add redux to manage auth

const store = createStore(loginReducer);

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={PrimaryLayout} />
          <Route path="/user" component={UnauthorizedLayout} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
