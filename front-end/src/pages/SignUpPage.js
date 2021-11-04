import { useState } from "react";
import { useHistory } from "react-router-dom";

export const SignUpPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSignupClicked = () => {
    alert("Sign Up not implemented yet");
  };

  return (
    <div className="content-container">
      <h1>Sign Up</h1>
      {errorMessage && <div className="fail">{errorMessage}</div>}
      <input
        type="email"
        placeholder="fake@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <hr />
      <button
        onClick={onSignupClicked}
        disabled={
          !email ||
          !password ||
          !confirmPassword ||
          password !== confirmPassword
        }
      >
        Sign Up
      </button>
      <button onClick={() => history.push("/login")}>
        Already have an account? Log In
      </button>
    </div>
  );
};
