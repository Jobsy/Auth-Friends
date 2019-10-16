import React from "react";
import { Route, NavLink, withRouter, Redirect } from "react-router-dom";
import LoginForm from "./LoginForm";
import FriendsList from "./FriendsList";

export function Container(props) {
  const onLogout = () => {
    localStorage.clear();
    props.history.replace("/");
  } 

  return (
    <div>
      <nav>
        <span>
          <NavLink exact to="/">Login</NavLink><br />
          <NavLink to="/friends">Friends List</NavLink><br />
        </span>

        <button onClick={onLogout}>Logout</button>

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
          render={props => withAuthCkeck(FriendsList, props)}
        />
      </main>
    </div>
  );
}

function withAuthCkeck(Component, props) {
  if (localStorage.getItem("token")) {
    return <Component {...props} />
  }
  return <Redirect to="/" />;
}


export default withRouter(Container);