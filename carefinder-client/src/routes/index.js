import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllHospitals from '../pages/AllHospitals';
import HospitalName from '../pages/HospitalName';
import CityName from '../pages/CityName';
import State from '../pages/State';
import ZipCode from '../pages/ZipCode';
import CountyName from '../pages/CountyName';
import Home from '../pages/Home';

export default function Routes() {
    return (
        <Switch>
            <Route path="/AllHospitals" component={AllHospitals} />
            <Route path="/HospitalName" component={HospitalName} />
            <Route path="/CityName" component={CityName} />
            <Route path="/State" component={State} />
            <Route path="/ZipCode" component={ZipCode} />
            <Route path="/CountyName" component={CountyName} />
            <Route path="/" component={Home} />
            <Route component={Home} />
        </Switch>
    )
}