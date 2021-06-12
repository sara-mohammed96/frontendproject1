import React from 'react';
import '../App.css';
import UserPage from '../pages/UserPage';
import ComplaintsDisplay from '../pages/ComplaintsDisplay';
import LoginPage from '../pages/LoginPage';
import Positions from '../pages/Positions';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Users from '../pages/Users';
import ComplainSeeMore from '../components/ComplaintsDisplay/ComplainSeeMore';
import LandingPage from '../pages/LandingPage';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import ComplaintsAudit from '../components/ComplaintsAudit/ComplaintsAudit';
export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/login'>
                    <LoginPage />
                </Route>

                <Route path='/userpage'>
                    <UserPage />
                </Route>

                <PrivateRoute path='/applications'>
                    <ComplaintsDisplay />
                </PrivateRoute>

                <Route path='/positions'>
                    <Positions />
                </Route>

                <Route path='/users'>
                    <Users />
                </Route>

                <Route path='/application/:applicationId'>
                    <ComplaintsAudit />
                </Route>

                <Route path='/details'>
                    <ComplainSeeMore />
                </Route>

                <Route path='/'>
                    <LandingPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
