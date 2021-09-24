import React from 'react';
import { Switch, Route } from 'react-router-dom';
import All from '../pages/All';
import Home from '../pages/Home';

export default function Routes() {
    return (
        <Switch>
            <Route path="/All" component={All} />
            <Route path="/" component={Home} />
            <Route component={Home} />
        </Switch>
    )
}