import React, { useState } from "react";
import "./login.css";
import { auth } from "./firebaseInstance";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const dispatch = useDispatch();
  const register = () => {
    if (!name) {
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profileUrl,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth?.user?.email,
                uid: userAuth?.user?.uid,
                displayName: name,
                photoURL: profileUrl,
              })
            );
          });
      })
      .catch((err) => alert(err));
  };

  const loginToApplication = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth?.user.email,
            uid: userAuth?.user?.uid,
            displayName: userAuth?.user?.displayName,
            photoURL: userAuth?.user?.photoURL,
          })
        );
      })
      .catch((err) => alert(err));
  };
  return (
    <div className="login">
      <img
        src="https://www.freepnglogos.com/uploads/linkedin-logo-transparent-png-25.png"
        alt=""
      />
      <form>
        <input
          value={name}
          onChange={({ target: { value } }) => setName(value)}
          placeholder="Full name (required if register )"
          type="text"
        />
        <input
          value={profileUrl}
          onChange={({ target: { value } }) => setProfileUrl(value)}
          placeholder="Profile pic URL (optional)"
          type="text"
        />
        <input
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
          placeholder="Password"
          type="password"
        />
        <button onClick={(e) => loginToApplication(e)}>Sign In</button>
      </form>
      <p>
        Not a member ?{" "}
        <span className="login__register" onClick={register}>
          Register now
        </span>
      </p>
    </div>
  );
}

export default Login;
