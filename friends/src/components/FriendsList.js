
import React, { useState, useEffect } from "react";
import axiosWithAuth from "../axios";
import axios from "axios";



export default function FriendsList(props) {
  const [friends, setFriends] = useState([]);


  useEffect(() => {

    axiosWithAuth().get("http://localhost:5000/api/friends")
      .then(res => {
        // debugger
        console.log(">>>: ", res)
        setFriends(res.data);
      })
      .catch(error => {
        alert("Sorryyyyyyyyyy")
      });
  }, []);

  return (
    <div>
      {
        friends.map(friend => (
          <div>
            {/* {console.log(friend)} */}
            Name: {friend.name}
            <br />
            Age: {friend.age}
            <br />
            Email: {friend.email}
            <br />
            <br />
          </div>
        ))
      }
      <FriendsForm />
    </div>
  )
}



function FriendsForm(props) {
  const [newFriend, setNewFriend] = useState(
    {
      name: "",
      age: "",
      email: ""
    }
  )

  const changeHandler = e => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    })
  }

  const submitHandler = e => {
    e.preventDefault()
    // axios
    axiosWithAuth().post('http://localhost:5000/api/friends', newFriend)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <>
      <h3>Friends Membership Form</h3>
      <form onSubmit={submitHandler}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={newFriend.name}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label>Age</label>
          <input
            type="text"
            name="age"
            value={newFriend.age}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={newFriend.email}
            onChange={changeHandler}
          />
        </div>
        <button type="submit">Submit</button>

      </form>
    </>
  )
}