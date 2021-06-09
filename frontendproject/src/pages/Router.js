import React from 'react';
import '../App.css';
import UserPage from '../pages/UserPage';
import ComplaintsDisplay from '../pages/ComplaintsDisplay';
import LoginPage from '../pages/LoginPage';
import Profiles from '../pages/Profiles';
import Positions from '../pages/Positions';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Users from '../pages/Users';
import Comments from '../pages/Comments';
import ComplainSeeMore from '../components/ComplaintsDisplay/ComplainSeeMore';
import LandingPage from '../pages/LandingPage';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';

export default function Router() {
 return (
  <BrowserRouter>
   <Switch>
    <Route path='/login'>
     <LoginPage />
    </Route>

    <PrivateRoute path='/Profiles'>
     <Profiles />
    </PrivateRoute>

    <Route path='/userpage'>
     <UserPage />
    </Route>

    <PrivateRoute path='/Complaints'>
     <ComplaintsDisplay />
    </PrivateRoute>

    <Route path='/positions'>
     <Positions />
    </Route>

    <Route path='/users'>
     <Users />
    </Route>

    <Route path='/comments'>
     <Comments />
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
