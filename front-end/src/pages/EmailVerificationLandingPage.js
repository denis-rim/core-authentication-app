import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useToken } from "../auth/useToken";
import { EmailVerificationFail } from "./EmailVerificationFail";
import { EmailVerificationSuccess } from "./EmailVerificationSuccess";

export const EmailVerificationLandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const { verificationString } = useParams();
  const [, setToken] = useToken();

  useEffect(
    () => {
      const loadVerification = async () => {
        try {
          const response = await axios.put("/api/verify-email", {
            verificationString,
          });
          const { token } = response.data;
          setToken(token);
          setIsSuccess(true);
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
          setIsSuccess(false);
          console.log(error);
        }
      };
      loadVerification();
    },
    setToken,
    verificationString
  );

  if (isLoading) return <p>Loading...</p>;
  if (!isSuccess) return <EmailVerificationFail />;

  return <EmailVerificationSuccess />;
};
