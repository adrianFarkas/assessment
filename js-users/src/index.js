import React from "react";
import ReactDOM from "react-dom";
import Users from "pages/Users";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RootContextProvider from "contexts/RootContext";

const routes = (
  <RootContextProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={Users} />
      </Switch>
    </Router>
  </RootContextProvider>
);

ReactDOM.render(routes, document.getElementById("root"));
