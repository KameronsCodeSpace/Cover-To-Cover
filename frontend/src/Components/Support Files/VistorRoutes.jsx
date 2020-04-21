import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom'

// main pages
import Landing from '../Pages/Landing';
import Login from '../Authentication/Login';
import Registration from '../Authentication/Registration';
import Explore from '../Pages/Explore';
import Travel from '../Pages/Travel';
import Trending from '../Pages/Trending';

const VistorRoutes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/registration' component={Registration} />

            {/* VistorRoutes below */}
            <Route path='/explore' component={Explore} />
            <Route path='/travel' component={Travel} />
            <Route path='/trending' component={Trending} />

        </Switch>
    )
}
export default VistorRoutes;