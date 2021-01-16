import {useState} from 'react'
import axios from "axios";

function Login({isLogIn}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState({});
    const errors = {};

    const validation = function () {
        if (!email) {
            errors.email = "Email can't be empty";
        }

        if (!password) {
            errors.password ="Password can't be empty";
        }
    }

    const loginFormSubmit = function(e){
        e.preventDefault();
        validation();

        if (Object.keys(errors).length === 0) {
            setLoginError({});
            axios
            .post("https://api.backendless.com/DC4BB865-019A-E495-FF26-687FC4426D00/39EC2F40-BBB0-4ABC-91EC-C48C87DA349B/users/login", {
              login: email,
              password: password,
            })
            .then((response) => {
              console.log(response);  
              if (response.status === 200) {
                setEmail("");
                setPassword("");
                localStorage.setItem("token", response.data.user-token);
              } 
            })
            .catch(err => {
              setLoginError({ serverResponse: err.response.data.message });
            });
        }
        else{
            setLoginError(errors);
        }
    }

    return (
        <div>
            <h1>Log in</h1>
            <form onSubmit={loginFormSubmit}>
            <div className="form-group">
                <input 
                type="text"
                placeholder="Enter your email"
                onChange={e => setEmail(e.target.value)}
                />
                  {loginError.email && <span>{loginError.email}</span>}
            </div>
            <div className="form-group">
                <input 
                type="password"
                placeholder="Enter your password"
                onChange={e => setPassword(e.target.value)}
                />
                {loginError.password && <span>{loginError.password}</span>}
            </div>
            <button type="submit">Log in</button>
            </form>
        </div>
    )
}

export default Login
