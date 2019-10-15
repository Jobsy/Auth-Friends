
import React, {useState, useEffect} from "react";
import withAuth from "../axios";



export default function FriendsList(props) {
    const [friends, setFriends] = useState([]);

    useEffect(() => {

        withAuth().get("http://localhost:5000/api/friends")
        .then(res => {
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