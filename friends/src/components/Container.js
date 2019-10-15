import React from "react";
import { Route, NavLink, withRouter, Redirect } from "react-router-dom";
import LoginForm from "./LoginForm";


export function Container(props) {
  // const 

  return (
    <div>
      <span>
        <NavLink exact to="/">Login</NavLink>
      </span>

      <main>
        <Route exact path="/" component={LoginForm}/>
      </main>
    </div>
  )
}

