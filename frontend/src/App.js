import React, { useState} from 'react';
import './App.css';

import AuthApi from './Components/Authentication/AuthApi'
import Routes from './Components/Support Files/Routes'

import { BrowserRouter as Router } from 'react-router-dom'

//Setting up a basic nav bar on each page. We can modify this structure later to
//Works better with Authtication and Redux
const App = () => {
  const [auth,setAuth] = useState(false);

  return (
    <AuthApi.Provider value={{auth,setAuth}}>
      <Router>
        <div className="App">
          <Routes />
        </div>
      </Router>
    </AuthApi.Provider>
  )
}

export default App;
