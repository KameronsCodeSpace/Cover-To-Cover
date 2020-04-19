import React from 'react';
import './App.css';

// main pages
import Landing from './Components/Pages/Landing';
import Login from './Components/Auth/Login';
import Registration from './Components/Auth/Registration';
import Travel from './Components/Pages/Travel';
import Trending from './Components/Pages/Trending';
import UserProfile from './Components/Pages/UserProfile';
import Explore from './Components/Pages/Explore'
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
          <Route path='/explore'>
            <Nav />
            <Explore />
          </Route>
          <Route path='/travel'>
            <Nav />
            <Travel />
          </Route>
          <Route path='/trending'>
            <Nav />
            <Trending />
          </Route>
          <Route path='/userprofile'>
            <Nav />
            <UserProfile />
          </Route>

        </Switch>
      </div>
    </Router>
  )
}

export default App;
