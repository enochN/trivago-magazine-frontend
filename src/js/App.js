import React, { Component } from 'react';
import store from './store';
import history from './history';
import {Provider} from "react-redux";
import {Route, Router, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostDetailsPage from "./pages/PostDetailsPage";

export default class App extends Component {

  render(){
    return (
        <Provider store={store}>
          <Router history={history}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/details" component={PostDetailsPage} />
            </Switch>
          </Router>
        </Provider>
    )
  }
};
