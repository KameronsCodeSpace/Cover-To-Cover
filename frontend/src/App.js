import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './store'
import { loadUser } from './Actions/authActions'

import UserRoutes from './Components/Support Files/UserRoutes'
import VistorRoutes from './Components/Support Files/VistorRoutes'
// import Cookies from 'js-cookie'

import { BrowserRouter as Router, Route } from 'react-router-dom'

//Works better with Authtication and Redux
class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser());
    console.log('UserInfo', store.getState(loadUser())['auth'].isAuthenticated);
  }

  render() {

    // const readCookie = () => {
    // const user = Cookies.get("user");
    // if (user) {
    //   setAuth(true);
    // }
    // }

    // useEffect(() => {
    //   readCookie();
    // }, [])
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
          {/* <UserRoutes /> */}

            <Route
            // Use this line to tell when the user is logged in or not and set it up once you can move between components
              // render={() => store.getState(loadUser())['auth'].isAuthenticated ? (
              render={() => true ? (

                <UserRoutes />
              ) :
                (
                  <VistorRoutes />
                )
              }
            />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
