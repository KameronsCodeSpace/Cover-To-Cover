import React, { useContext } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom'

import { ProtectedRoute } from '../Authentication/ProtectedRoute'
import AuthApi from '../Authentication/AuthApi' 

// main pages
import Landing from '../Pages/Landing';
import Login from '../Authentication/Login';
import Registration from '../Authentication/Registration';
// import Travel from '../Pages/Travel';
// import Trending from '../Pages/Trending';
// import UserProfile from '../Pages/UserProfile';
import Explore from '../Pages/Explore';

// supporting jsx files
import Nav from './Nav'

const Routes = () => {
const Auth = useContext(AuthApi)
    return (
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/registration' component={Registration} />

            {/* Auth Routes below */}
            <ProtectedRoute path='/explore' auth={Auth.auth} component={Explore} />

            {/* <ProtectedRoute path='/travel' component={Travel}>
                <Nav />
                <Travel />
            </ProtectedRoute>
            <ProtectedRoute path='/trending' component={Trending}>
                <Nav />
                <Trending />
            </ProtectedRoute>
            <ProtectedRoute path='/userprofile' component={UserProfile}>
                <Nav />
                <UserProfile />
            </ProtectedRoute> */}
            {/* <Route path='*' component={() => "404 NOT FOUND"} /> */}

        </Switch>
    )
}
export default Routes;