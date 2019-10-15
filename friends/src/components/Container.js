import React from "react";
import { Route, NavLink, withRouter, Redirect } from "react-router-dom";
import LoginForm from "./LoginForm";
import  FriendsList from "./FriendsList";

export function Container(props) {
  // const 

  return (
    <div>
      <span>
        <NavLink exact to="/">Login</NavLink>
        <NavLink exact to="/friends">Friends List</NavLink>

      </span>
      <main>
        <Route exact path="/friends" component={LoginForm} />
        <Route exact path="/"
        render={props => withAthCheck(FriendsList, props)} />
      </main>
    </div>
  );
}

function withAthCheck(Component, props) {
  if(localStorage.getItem("token")) {
    return <Component {...props} />
  }
  return <Redirect to="/" />;
}


export default withRouter(Container);