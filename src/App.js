//
import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowseRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  <Router>
    <Switch>
      <Route path="/" exact={true}>
        <Dashboard></Dashboard>
      </Route>
      <Route path="/Login">
        <Login></Login>
      </Route>
      <Route path="*">
        <Error></Error>
      </Route>
    </Switch>
  </Router>;
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
