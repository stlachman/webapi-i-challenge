import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";

function App() {
  return (
    <>
      <Router>
        <Navigation />

        <Route exact path="/" component={UserList} />
        <Route path="/add" component={AddUser} />
      </Router>
    </>
  );
}

export default App;
