import React, { useContext } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom'

import { ProtectedRoute } from '../Authentication/ProtectedRoute'
import AuthApi from '../Authentication/AuthApi' 

// main pages
import Landing from '../Pages/Landing';
import Login from '../Authentication/Login';
import Registration from '../Authentication/Registration';
import Dashboard from '../ProtectedPages/Dashboard';
import Travel from '../Pages/Travel';
import Trending from '../Pages/Trending';
import UserProfile from '../ProtectedPages/UserProfile';

const UserRoutes = () => {
const Auth = useContext(AuthApi)
    return (
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/registration' component={Registration} />

            {/* Auth UserRoutes below */}
            <ProtectedRoute path='/dashboard' auth={Auth.auth} component={Dashboard} />
            <ProtectedRoute path='/travel' auth={Auth.auth} component={Travel} />
            <ProtectedRoute path='/trending' auth={Auth.auth} component={Trending} />
            <ProtectedRoute path='/userprofile' auth={Auth.auth} component={UserProfile} />

            {/* <ProtectedRoute path='/travel' component={Travel}>
            </ProtectedRoute>
            <ProtectedRoute path='/trending' component={Trending}>
            </ProtectedRoute>
            <ProtectedRoute path='/userprofile' component={UserProfile}>
            </ProtectedRoute> */}
            {/* <Route path='*' component={() => "404 NOT FOUND"} /> */}

        </Switch>
    )
}
export default UserRoutes;