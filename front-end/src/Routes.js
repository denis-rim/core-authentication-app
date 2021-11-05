import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./auth/PrivateRoute";
import { EmailVerificationLandingPage } from "./pages/EmailVerificationLandingPage";
import { ForgotPasswordPage } from "./pages/ForgotPasswordPage";
import { LoginPage } from "./pages/LoginPage";
import { PasswordResetLandingPage } from "./pages/PasswordResetLandingPage";
import { SignUpPage } from "./pages/SignUpPage";
import { UserInfoPage } from "./pages/UserInfoPage";
import { VerifyEmailPage } from "./pages/VerifyEmailPage";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact>
          <UserInfoPage />
        </PrivateRoute>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/sign-up">
          <SignUpPage />
        </Route>
        <Route path="/verify-please">
          <VerifyEmailPage />
        </Route>
        <Route path="/verify-email/:verificationString">
          <EmailVerificationLandingPage />
        </Route>
        <Route path="/forgot-password">
          <ForgotPasswordPage />
        </Route>
        <Route path="/reset-password/:passwordResetCode">
          <PasswordResetLandingPage />
        </Route>
      </Switch>
    </Router>
  );
};
