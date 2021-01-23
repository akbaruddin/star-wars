import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react"
import PrivateRoute from "./Utils/PrivateRoute";

import Login from "./Login";
import Search from "./Search";

import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/" component={Search} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
