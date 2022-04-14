import { getAuth } from "firebase/auth";
import React from "react";
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import app from "../../firebase.init";


const Login = () => {
  // need auth
  const auth=getAuth(app)
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  return (
    <div>
      <h2>Please Login</h2>
      <div style={{margin:'15px'}}>
      <button onClick={() =>signInWithGoogle()}>google sign in</button>
      </div>
      <form>
        <input
          type="email"
          name="email"
          placeholder="enter your email address"
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="enter your password"
        />
        <br />
        <br />
        <input type="submit" value="Log In" />
      </form>
    </div>
  );
};

export default Login;
