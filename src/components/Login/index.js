import { useState } from 'react'
import axios from "axios";
import styles from '../auth.module.css';
import { Link } from "react-router-dom";

function Login(props) {
    const { setIsLogin } = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState({});
    const [isLoading, setisLoading] = useState(false)
    const errors = {};

    const validation = function () {
        if (!email) {
            errors.email = "Email can't be empty";
        }

        if (!password) {
            errors.password = "Password can't be empty";
        }
    }

    const loginFormSubmit = function (e) {
        e.preventDefault();
        validation();

        if (Object.keys(errors).length === 0) {
            setLoginError({});
            setisLoading(true);
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
                        setIsLogin(true);
                        setisLoading(false);
                        localStorage.setItem("token", response.data["user-token"]);
                        props.history.push("/cars");
                    }
                })
                .catch(err => {
                    setisLoading(false);
                    setLoginError({ serverResponse: err.response.data.message });
                });
        }
        else {
            setLoginError(errors);
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.head}>
                    <h3 className={styles.title}>Sign In</h3>
                </div>
                <form onSubmit={loginFormSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            placeholder="Enter your email"
                            onChange={e => setEmail(e.target.value)}
                            className={styles.eckInput}
                        />
                        {loginError.email && <span className={styles.error}>{loginError.email}</span>}
                    </div>
                    <div className={styles.inputGroup}>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            onChange={e => setPassword(e.target.value)}
                            className={styles.eckInput}
                        />
                        {loginError.password && <span className={styles.error}>{loginError.password}</span>}
                    </div>
                    <div className={styles.loginExtra}>
                        <span className={styles.forgotPassword}>Forgot Password ?</span>
                    </div>
                    <div className={styles.loginActions}>
                        <button type="submit" className={styles.loginButton}> Log in {isLoading &&
                            <svg className={styles.loading} viewBox="0 0 50 50">
                                <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                            </svg>
                        }</button>
                    </div>
                    <div className={styles.account}>
                        <span className={styles.accountMsg}>Don't have an account ?</span>
                        <Link to="/register">Sign Up!</Link>
                    </div>
                    <div className={styles.externalLogin}>
                        <div className={styles.divider}>
                            <span></span>
                            <span>OR</span>
                            <span></span>
                        </div>
                        <div className={styles.fbExternal}>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 60.734 60.733" xmlSpace="preserve" style={{ fill: '#fff' }}>
                                <g>
                                    <path d="M57.378,0.001H3.352C1.502,0.001,0,1.5,0,3.353v54.026c0,1.853,1.502,3.354,3.352,3.354h29.086V37.214h-7.914v-9.167h7.914   v-6.76c0-7.843,4.789-12.116,11.787-12.116c3.355,0,6.232,0.251,7.071,0.36v8.198l-4.854,0.002c-3.805,0-4.539,1.809-4.539,4.462   v5.851h9.078l-1.187,9.166h-7.892v23.52h15.475c1.852,0,3.355-1.503,3.355-3.351V3.351C60.731,1.5,59.23,0.001,57.378,0.001z" />
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                            </svg>
                            <span className={styles.fbText}> Log in with Facebook </span>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login
