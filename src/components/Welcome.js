import React, { useState, useEffect } from "react";
import "./Welcome.css";
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase.js";
import { useNavigate } from "react-router-dom";

function Welcome() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    const [registerInformation, setRegisterInformation] = useState({
        email: "",
        confirmEmail: "",
        password: "",
        confirmPassword: "",
    });

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                navigate("/Home");
            }
        });
    }, []);
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate("/Home");
            })
            .catch((err) => alert(err.message));
    };
    const handleRegister = () => {
        if (
            registerInformation.email != registerInformation.confirmEmail ||
            registerInformation.password != registerInformation.confirmPassword
        ) {
            alert("Email or password is not the same!");
            return;
        }
        createUserWithEmailAndPassword(
            auth,
            registerInformation.email,
            registerInformation.password
        )
            .then(() => {
                navigate("/Home");
            })
            .catch((err) => alert(err.message));
    };

    return (
        <div className="welcome">
            <h1>Todo List</h1>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSBqaZ-DAznjfeQWxmtAPQxtwCiDdd_idGuQ&usqp=CAU" alt="image" />
            <div className="login_register_container">
                {isRegistering ? (
                    <>
                        <input
                            type="email"
                            placeholder="Email"
                            value={registerInformation.email}
                            onChange={(e) =>
                                setRegisterInformation({
                                    ...registerInformation,
                                    email: e.target.value,
                                })
                            }
                        />
                        <input
                            type="email"
                            placeholder="Confirm email"
                            value={registerInformation.confirmEmail}
                            onChange={(e) =>
                                setRegisterInformation({
                                    ...registerInformation,
                                    confirmEmail: e.target.value,
                                })
                            }
                        />
                        <input
                            type="password"
                            placeholder="password"
                            value={registerInformation.password}
                            onChange={(e) =>
                                setRegisterInformation({
                                    ...registerInformation,
                                    password: e.target.value,
                                })
                            }
                        />
                        <input
                            type="password"
                            placeholder="Confirm password"
                            value={registerInformation.confirmPassword}
                            onChange={(e) =>
                                setRegisterInformation({
                                    ...registerInformation,
                                    confirmPassword: e.target.value,
                                })
                            }
                        />

                        <button id="button1" onClick={handleRegister}>Register</button>
                        <button id="button2" onClick={() => setIsRegistering(false)}>
                            go back
                        </button>
                    </>
                ) : (
                    <>
                        <input
                            type="email"
                            placeholder="Email"
                            onChange={handleEmailChange}
                            value={email}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={handlePasswordChange}
                            value={password}
                        />
                        <button id="button1" onClick={handleSignIn}>Sign in</button>
                        <button id="button2" onClick={() => setIsRegistering(true)}>
                            Create an account
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Welcome;
