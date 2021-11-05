import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const ForgotPasswordPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const onSubmit = async () => {
    try {
      await axios.post(`/api/forgot-password/${email}`);
      setSuccess(true);
      setTimeout(() => {
        history.push("/login");
      }, 5000);
    } catch (error) {
      setErrorMessage(error.message);
      console.log(error);
    }
  };

  return success ? (
    <div className="content-container">
      <h1>Success</h1>
      <p>Check your email for a reset link</p>
    </div>
  ) : (
    <div className="content-container">
      <h1>Forgot Password</h1>
      <p>
        Enter your email address and we'll send you a link to reset your
        password.
      </p>
      {errorMessage && <div className="fail">{errorMessage}</div>}
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button disabled={!email} onClick={onSubmit}>
          Send
        </button>
      </form>
    </div>
  );
};
