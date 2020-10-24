import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyNavbar from "./components/layout/MyNavbar";
import Landing from "./components/layout/Landing";
import AboutUs from "./components/layout/AboutUs";
import Register from "./components/auth/Register";
import AdminRegister from "./components/auth/AdminRegister";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import ManagePets from "./components/dashboard/ManagePets";
import PrivateRoute from "./components/routing/PrivateRoute";
// Redux
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import "./App.css";
import AdminLogin from "./components/auth/AdminLogin";
import { AdminEditProfile } from "./components/dashboard/AdminEditProfile";
import { AddNewPet } from "./components/dashboard/AddNewPet";
import { loadAdmin } from "../src/actions/auth";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadAdmin(localStorage.getItem("token")));
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <MyNavbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/aboutus" component={AboutUs} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/adminregister" component={AdminRegister} />
              <Route exact path="/adminlogin" component={AdminLogin} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/admineditprofile" component={AdminEditProfile} />
              <Route exact path="/addnewpet" component={AddNewPet} />
              <PrivateRoute
                exact
                path="/admindashboard"
                component={AdminDashboard}
              />
              <PrivateRoute exact path="/managepets" component={ManagePets} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
