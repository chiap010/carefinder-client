import React from 'react';
import { Switch, Route } from 'react-router-dom';
import All from '../pages/All';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" component={All} />
            <Route path="/all" component={All} />

            <Route component={All} />
        </Switch>
    )
}