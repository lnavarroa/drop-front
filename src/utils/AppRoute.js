import React from 'react';
//import { Route } from 'react-router-dom';
//import { BrowserRouter as Switch, Route } from 'react-router-dom';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const AppRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {

  Layout = (Layout === undefined) ? props => (<>{props.children}</>) : Layout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )} />
  );
}

export default AppRoute;