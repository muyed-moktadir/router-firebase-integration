import React from "react";

const Register = () => {
  return (
    <div>
      <h3>Please Register Now</h3>
      <form>
       <input type="text" name="name" placeholder="enter your name" />
        <br />
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
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
