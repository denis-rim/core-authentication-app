import { forgotPasswordRoute } from "./forgotPasswordRoute";
import { getGoogleOauthUrlRoute } from "./getGoogleOauthUrlRoute";
import { logInRoute } from "./logInRoute";
import { resetPasswordRoute } from "./resetPasswordRoute";
import { signUpRoute } from "./signUpRoute";
import { testEmailRoute } from "./testEmailRoute";
import { testRoute } from "./testRoute";
import { updateUserInfoRoute } from "./updateUserInfoRoute";
import { verifyEmailRoute } from "./verifyEmailRoute";

export const routes = [
  testRoute,
  signUpRoute,
  logInRoute,
  updateUserInfoRoute,
  testEmailRoute,
  verifyEmailRoute,
  forgotPasswordRoute,
  resetPasswordRoute,
  getGoogleOauthUrlRoute,
];
