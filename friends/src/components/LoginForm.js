
import React, {useRef} from "react";
import axios from "axios";

export default function LoginForm(props) {
    const userNameRef = useRef();
    const passwordRef = useRef();

    const submit = () => {
      console.log("...:", {
          
        username: userNameRef.current.value,
        password: passwordRef.current.value,
    })
        axios.post("http://localhost:5000/api/login", {
          
            username: userNameRef.current.value,
            password: passwordRef.current.value,
        })
        .then(res => {
            // debugger
            localStorage.setItem("token", res.data.payload)
            props.history.push("/friends");
        });
    };

    return (
        <div>
            <div>
                Username <input ref={userNameRef} type="
                text" />
                <br />

                Password  <input ref={passwordRef} type="
                text" />
                <br />
            </div>

            <div>
                <button onClick={submit}>Login</button>
            </div>
        </div>
    );
}