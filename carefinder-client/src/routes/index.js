import React from "react";
import { Switch, Route } from "react-router-dom";

import AllHospitals from "../pages/AllHospitals";
import HospitalName from "../pages/HospitalName";
import CityName from "../pages/CityName";
import State from "../pages/State";
import ZipCode from "../pages/ZipCode";
import CountyName from "../pages/CountyName";
import ProviderID from "../pages/ProviderID";
import CityState from "../pages/CityState";
import Distance from "../pages/Distance";

import Home from "../pages/Home";

// The Switch and Route components need react-router-dom, so we import that.
// For each route, we define a path, and a component to render when that path is
// call upon.

// If the path is empty, or something that isn't defined, we'll use the Home component.
export default function Routes() {
      return (
            <Switch>
                  <Route path="/AllHospitals" component={AllHospitals} />
                  <Route path="/HospitalName" component={HospitalName} />
                  <Route path="/CityName" component={CityName} />
                  <Route path="/CityState" component={CityState} />
                  <Route path="/State" component={State} />
                  <Route path="/ZipCode" component={ZipCode} />
                  <Route path="/CountyName" component={CountyName} />
                  <Route path="/HospitalID" component={ProviderID} />
                  <Route path="/Distance" component={Distance} />
                  <Route path="/" component={Home} />
                  <Route component={Home} />
            </Switch>
      );
}
