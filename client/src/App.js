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
import PrivateRoute from "./components/routing/PrivateRoute";
// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from './utils/setAuthToken';
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <MyNavbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/adminregister" component={AdminRegister} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/aboutus" component={AboutUs} />
              <PrivateRoute exact path="/admindashboard" component={AdminDashboard} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
