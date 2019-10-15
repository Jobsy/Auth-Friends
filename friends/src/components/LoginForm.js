
import React, {useRef} from "react";
import axios from "axios";

export default function LoginForm(props) {
    const userNameRef = useRef();
    const passwordRef = useRef();

    const submit = () => {
        axios.post("http://localhost:5000/api/login", {
            userName: userNameRef.current.value,
            password: passwordRef.current.value,
        })
        .then(res => {
            // debugger
            localStorage.setItem("token", res.data.token)
            // props.history.push("/");
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
                <button onClick={submit}>Submit</button>
            </div>
        </div>
    );
}