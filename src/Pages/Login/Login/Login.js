import React from "react";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div id="login">
      <h2>Please Login</h2>
      <button
        id="g-btn"
        onClick={signInUsingGoogle}
        className="btn btn-primary"
      >
        Google Sign In
      </button>
    </div>
  );
};

export default Login;
