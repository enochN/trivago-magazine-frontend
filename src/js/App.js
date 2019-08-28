import React from "react";
import store from "./store";
import history from "./history";
import { Provider } from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostDetailsPage from "./pages/PostDetailsPage";

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/p/:slug" component={PostDetailsPage} />
        </Switch>
      </Router>
    </Provider>
  );
}
