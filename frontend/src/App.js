import React from 'react';
import './App.css';
import { ProtectedRoute } from './Components/Authentication/ProtectedRoute'

// main pages
import Landing from './Components/Pages/Landing';
import Login from './Components/Authentication/Login';
import Registration from './Components/Authentication/Registration';
import Travel from './Components/Pages/Travel';
import Trending from './Components/Pages/Trending';
import UserProfile from './Components/Pages/UserProfile';
import Explore from './Components/Pages/Explore';

// supporting jsx files
import Nav from './Components/Support Files/Nav'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Setting up a basic nav bar on each page. We can modify this structure later to
//Works better with Authtication and Redux
const App = () => {

  return (
    <Router>
      <div className="App">
        {/* <Nav /> */}
        <Switch>

          <Route exact path='/' component={Landing} />
          <Route path='/login' component={Login} />
          <Route path='/registration' component={Registration} />
          
          {/* Auth Routes below */}
          <ProtectedRoute path='/explore'>
            <Nav />
            <Explore />
          </ProtectedRoute>
          <ProtectedRoute path='/travel'>
            <Nav />
            <Travel />
          </ProtectedRoute>
          <ProtectedRoute path='/trending'>
            <Nav />
            <Trending />
          </ProtectedRoute>
          <ProtectedRoute path='/userprofile'>
            <Nav />
            <UserProfile />
          </ProtectedRoute>
          <Route path='*' component={() => "404 NOT FOUND"} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
