import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import { UserInfoPage } from "./pages/UserInfoPage";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <UserInfoPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route to="/sign-up">
          <SignUpPage />
        </Route>
      </Switch>
    </Router>
  );
};
