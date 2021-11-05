import { useHistory } from "react-router-dom";

export const EmailVerificationFail = () => {
  const history = useHistory();

  return (
    <div>
      <h1>Email verification failed</h1>
      <p>
        Something went wrong with your email verification. Please try again.
      </p>
      <button onClick={() => history.push("/sign-up")}>Go to Sign Up</button>
    </div>
  );
};
