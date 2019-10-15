import React from "react";
import { Route, NavLink, withRouter, Redirect } from "react-router-dom";
import LoginForm from "./LoginForm";
import FriendsList from "./FriendsList";

export function Container(props) {
  // const 

  return (
    <div>
      <nav>
        <span>
          <NavLink exact to="/">Login</NavLink>
          <NavLink to="/friends">Friends List</NavLink>
        </span>
      </nav>

      <main>
        <Route
          exact
          path="/"
          component={LoginForm}
        />

        <Route
          exact
          path="/friends"
          render={props => withAthCheck(FriendsList, props)}
        />
      </main>
    </div>
  );
}

function withAthCheck(Component, props) {
  if (localStorage.getItem("token")) {
    return <Component {...props} />
  }
  return <Redirect to="/" />;
}


export default withRouter(Container);