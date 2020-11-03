import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyNavbar from "./components/layout/MyNavbar";
import Landing from "./components/layout/Landing";
import Routes from "./components/routing/Routes";
import setAuthToken from "./utils/setAuthToken";
import "./App.css";
import { loadAdmin } from "../src/actions/auth";
import { UserEditProfile } from "./components/dashboard/UserEditProfile";
import { loadUser } from "../src/actions/auth";

// Redux
import { Provider } from "react-redux";
import store from "./store";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    let role = localStorage.getItem("role");
    let user_id = localStorage.getItem("token");
    if ( role === "user")
      store.dispatch(loadUser(user_id));
    if ( role === "admin")
      store.dispatch(loadAdmin(user_id));
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <MyNavbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Routes />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
