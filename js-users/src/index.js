import React from "react";
import ReactDOM from "react-dom";
import Users from "pages/Users";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RootContextProvider from "contexts/RootContext";
import GlobalStyle from "style/globalStyle";
import Edit from "pages/Edit";

const routes = (
  <RootContextProvider>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route path="/edit/:userId" component={Edit} />
        <Route exact path="/" component={Users} />
      </Switch>
    </Router>
  </RootContextProvider>
);

ReactDOM.render(routes, document.getElementById("root"));
