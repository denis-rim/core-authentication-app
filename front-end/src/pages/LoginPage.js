import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useToken } from "../auth/useToken";
import { useQueryParams } from "../util/useQueryParams";

export const LoginPage = () => {
  const [, setToken] = useToken();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [googleOauthUrl, setGoogleOauthUrl] = useState("");
  const { token: oauthToken } = useQueryParams();

  useEffect(() => {
    if (oauthToken) {
      // If there's a token, that means we were just redirected back here from Oauth
      setToken(oauthToken);
      history.push("/");
    }
  }, [oauthToken, setToken, history]);

  useEffect(() => {
    const loadGoogleOauthUrl = async () => {
      try {
        const response = await axios.get("/auth/google/url");
        setGoogleOauthUrl(response.data.url);
      } catch (error) {
        console.log(error);
      }
    };
    loadGoogleOauthUrl();
  }, []);

  const onLoginClicked = async () => {
    try {
      const response = await axios.post("/api/login", {
        email,
        password,
      });
      const { token } = response.data;
      setToken(token);
      history.push("/");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="content-container">
      <h1>Log In</h1>
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
      <hr />
      <button onClick={onLoginClicked} disabled={!email || !password}>
        Log In
      </button>
      <button onClick={() => history.push("/forgot-password")}>
        Forgot your password?
      </button>
      <button onClick={() => history.push("/sign-up")}>
        Don't have an account? Sign Up
      </button>
      <button
        disabled={!googleOauthUrl}
        onClick={() => (window.location.href = googleOauthUrl)}
      >
        Log in with Google
      </button>
    </div>
  );
};
