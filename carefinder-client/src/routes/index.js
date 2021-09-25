import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllHospitals from '../pages/AllHospitals';
import HospitalName from '../pages/HospitalName';
import Home from '../pages/Home';

export default function Routes() {
    return (
        <Switch>
            <Route path="/AllHospitals" component={AllHospitals} />
            <Route path="/HospitalName" component={HospitalName} />
            <Route path="/" component={Home} />
            <Route component={Home} />
        </Switch>
    )
}