import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './store'
import { loadUser } from './Actions/authActions'

// main vistor pages
import Landing from './Components/Pages/Landing';
import Login from './Components/Authentication/Login';
import Registration from './Components/Authentication/Registration';
import StoryPage from './Components/Pages/StoryPage'
import Comments from './Components/Pages/Comments'

// Pages with user only features
import Explore from './Components/Pages/Explore'
import Travel from './Components/ProtectedPages/Travel';
import Trending from './Components/ProtectedPages/Trending';
import UserProfile from './Components/ProtectedPages/UserProfile';
import NewStory from './Components/Support Files/posts'
import ProtectedRoute from '../src/Components/Authentication/ProtectedRoute';


// import UserRoutes from './Components/Support Files/UserRoutes'
// import VistorRoutes from './Components/Support Files/VistorRoutes'
// import Cookies from 'js-cookie'

import { BrowserRouter as Switch, Route } from 'react-router-dom'

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
        {/* <Router> */}
        <div className="App">
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/registration' component={Registration} />
            <Route path='/explore' component={Explore} />
            <Route path='/storypage' component={StoryPage} />
            <Route path='/comments' component={Comments}/>

            {/* Auth UserRoutes below */}
            <ProtectedRoute path='/travel' component={Travel} />
            <ProtectedRoute path='/trending' component={Trending} />
            <ProtectedRoute path='/userprofile' component={UserProfile} />
            <ProtectedRoute path='/newstory' component={NewStory} />

          </Switch>
          {/* <Route
              // Use this line to tell when the user is logged in or not and set it up once you can move between components
              // render={() => store.getState(loadUser())['auth'].isAuthenticated ? (
              render={() => true ? (
                <VistorRoutes />
              ) :
                (
                  <UserRoutes />
                )
              }
            /> */}
            
        </div>
        {/* </Router> */}
      </Provider>
    )
  }
}

export default App;
