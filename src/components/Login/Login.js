import React from "react";
import useFirebase from "../../hooks/Hooks";


const Login = () => {
    const {signInWithGoogle} = useFirebase()
  return (
    <div>
      <h2>Please Login</h2>
      <div style={{margin:'15px'}}>
      <button onClick={signInWithGoogle}>google sign in</button>
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
