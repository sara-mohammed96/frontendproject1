import React from 'react';
import '../App.css';
import UserPage from '../pages/UserPage';
import ComplaintsDisplay from '../pages/ComplaintsDisplay';
import LoginPage from '../pages/LoginPage';
import Positions from '../pages/Positions';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Users from '../pages/Users';
import LandingPage from '../pages/LandingPage';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import ComplaintsAudit from '../components/ComplaintsAudit/ComplaintsAudit';
import FollowUpComplain from './FollowUpComplain';
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

                <Route path='/follow'>
                    <FollowUpComplain />
                </Route>

                <PrivateRoute path='/applications'>
                    <ComplaintsDisplay />
                </PrivateRoute>

                <PrivateRoute path='/positions' isAdminRequired={true}>
                    <Positions />
                </PrivateRoute>

                <PrivateRoute path='/users' isAdminRequired={true} >
                    <Users />
                </PrivateRoute>

                <PrivateRoute path='/application/:applicationId'>
                    <ComplaintsAudit />
                </PrivateRoute>



                <Route path='/'>
                    <LandingPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
