import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Support Files/Nav'
import Landing from './Components/Pages/Landing'
import Login from './Components/Pages/Login'
import Signup from './Components/Pages/Signup'
import Travel from './Components/Pages/Travel'
import Trending from './Components/Pages/Trending'
import UserProfile from './Components/Pages/UserProfile'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Setting up a basic nav bar on each page. We can modify this structure later to
//Work better with Authtication and Redux
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          {/* replace this <br /> with CSS */}
          <br /> 
          <Switch>

            <Route exact path='/' component={Landing} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/travel' component={Travel} />
            <Route path='/trending' component={Trending} />
            <Route path='/userprofile' component={UserProfile} />

          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
