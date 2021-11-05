import { useHistory } from "react-router-dom";

export const EmailVerificationSuccess = () => {
  const history = useHistory();

  return (
    <div className="content-container">
      <h1>Email Verification Success</h1>
      <p>Thanks for verify your email. Now you can edit profile.</p>
      <button onClick={() => history.push("/")}>Go to home page</button>
    </div>
  );
};
