import React from "react";
import AboutUs from "../../components/layout/AboutUs";
import Register from "../../components/auth/Register";
import AdminRegister from "../../components/auth/AdminRegister";
import Login from "../../components/auth/Login";
import Alert from "../../components/layout/Alert";
import AdminDashboard from "../../components/dashboard/AdminDashboard";
import UserDashboard from "../../components/dashboard/UserDashboard";
import CreatePetProfile from "../../components/dashboard/CreatePetProfile";
import ManagePets from "../../components/dashboard/ManagePets";
import PrivateRoute from "../../components/routing/PrivateRoute";
import AdminLogin from "../../components/auth/AdminLogin";
import NotFound from "../../components/layout/NotFound";
import Pets from "../../components/layout/Pets";
import PetProfile from "../../components/layout/PetProfile";
import { AdminEditProfile } from "../../components/dashboard/AdminEditProfile";
import { Route, Switch } from "react-router-dom";
import EditPetProfile from "../dashboard/EditPetProfile";

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/pets" component={Pets} />
        <Route exact path="/pets/:id" component={PetProfile} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/adminregister" component={AdminRegister} />
        <Route exact path="/adminlogin" component={AdminLogin} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/admineditprofile" component={AdminEditProfile} />

        <PrivateRoute
          exact
          path="/create-pet-profile"
          component={CreatePetProfile}
        />
        <PrivateRoute exact path="/edit-pet-profile/:id" component={EditPetProfile} />
        <PrivateRoute exact path="/admindashboard" component={AdminDashboard} />
        <PrivateRoute exact path="/managepets" component={ManagePets} />
        <PrivateRoute exact path="/dashboard" component={UserDashboard} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
