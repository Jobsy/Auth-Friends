
import React, {useState, useEffect} from "react";
import axiosWithAuth from "../axios";



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
                    console.log(friend)
                ))
            }
        </div>
    )
}