import "./App.css";
import { Route, Switch } from "react-router-dom";
import AuthenticatedHome from "./components/authenticated-home/authenticated.component";
//import SignIn from './components/sign-in'

import FirebaseProvider from "./context/firebaseContext";
//import CheckIfUserIsLoggedIn from "./components/userManagement";

import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header-component";
import UnAuthenticatedHome from "./pages/onauthenticatedhome/unauthenticatedhome.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <FirebaseProvider>
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={AuthenticatedHome} />
          <Route path="/login" component={SignInAndSignUpPage} />
          <Route exact path="/" component={UnAuthenticatedHome} />
        </Switch>
        <Footer twitter="twitter.svg" />
      </div>
    </FirebaseProvider>
  );
}

export default App;
