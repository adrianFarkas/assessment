import React from "react";
import ReactDOM from "react-dom";
import Users from "pages/Users";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RootContextProvider from "contexts/RootContext";
import GlobalStyle, { colors } from "style/globalStyle";
import Edit from "pages/Edit";
import New from "pages/New";
import { ThemeProvider } from "styled-components";

const routes = (
  <RootContextProvider>
    <ThemeProvider theme={{ colors }}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/new" component={New} />
          <Route path="/edit/:userId" component={Edit} />
          <Route exact path="/" component={Users} />
        </Switch>
      </Router>
    </ThemeProvider>
  </RootContextProvider>
);

ReactDOM.render(routes, document.getElementById("root"));
