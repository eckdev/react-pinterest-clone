import {useState} from 'react'
import axios from "axios";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [formError, setFormError] = useState({});
    const errors ={};

    const validation = function () {
        if (!name) {
            errors.name = "Full Name can't be empty";
        }

        const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!email) {
            errors.email = "Email can't be empty";
        }
        else if(!emailRegExp.test(email)){
            errors.email="Please enter a valid email";
        }

        if (!password) {
            errors.password ="Password can't be empty";
        }
        else if(password.length < 5){
            errors.password = "Password must have at leat 5 characters"
        }

        if (!confirmPassword) {
            errors.confirmPassword ="Password can't be empty";
        }
        else if(confirmPassword !== password){
            errors.confirmPassword = "Confirm Password does not match with Password";
        }
    }

    const submitRegisterForm = function (e) {
        e.preventDefault();
        validation();
        debugger;
        if (Object.keys(errors).length === 0) {
            setFormError({});
            const REGISTER_API = "https://api.backendless.com/DC4BB865-019A-E495-FF26-687FC4426D00/39EC2F40-BBB0-4ABC-91EC-C48C87DA349B/users/register";
            axios.post(REGISTER_API, {
              name: name,
              email: email,
              password: password,
            })
            .then((response) => {
                console.log(response);
              const result = response.data;
              if (result) {
                setName("");
                setEmail("");
                setPassword("");
               
              }
            })
            .catch((err) => {
              alert(err.message);
            });
        }
        else{
            setFormError(errors);
        }
    } 

    return (
        <div>
            <h1>Register</h1>
<form onSubmit={submitRegisterForm}>
            <div className="form-group">
                <input 
                    type="text"
                    placeholder="Enter your Full Name"
                    onChange={(e) => setName(e.target.value)}
                />
                {formError.name && <span>{formError.name}</span>}
            </div>
            <div className="form-group">
                <input 
                    type="text"
                    placeholder="Enter your Email"
                    onChange={e => setEmail(e.target.value)}
                />
                {formError.email && <span>{formError.email}</span>}
            </div>
            <div className="form-group">
                <input 
                    type="password"
                    placeholder="Enter your Password"
                    onChange={e => setPassword(e.target.value)}
                />
                {formError.password && <span>{formError.password}</span>}
            </div>
            <div className="form-group">
                <input 
                    type="password"
                    placeholder="Enter your Confirm Password"
                    onChange={e => setConfirmPassword(e.target.value)}
                />
                {formError.confirmPassword && <span>{formError.confirmPassword}</span>}
            </div>
                <button type="submit"> Register </button>
            </form>
        </div>
    )
}

export default Register
