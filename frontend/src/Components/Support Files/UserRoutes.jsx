//Phasing out this file soon. Everything will be in App.js

// import React from 'react';
// import { BrowserRouter as Switch, Route } from 'react-router-dom'

// import { ProtectedRoute } from '../Authentication/ProtectedRoute'
// // import AuthApi from '../Authentication/AuthApi' 

// // main pages
// import Landing from '../Pages/Landing';
// import Login from '../Authentication/Login';
// import Registration from '../Authentication/Registration';
// import Dashboard from '../ProtectedPages/Dashboard';
// import Travel from '../ProtectedPages/Travel';
// import Trending from '../ProtectedPages/Trending';
// import UserProfile from '../ProtectedPages/UserProfile';

// const UserRoutes = () => {
// // const Auth = useContext(AuthApi)
//     return (
//         <Switch>
//             <Route exact path='/' component={Landing} />
//             <Route exact path='/login' component={Login} />
//             <Route exact path='/registration' component={Registration} />

//             {/* Auth UserRoutes below */}
//             <ProtectedRoute path='/dashboard' component={Dashboard} />
//             <ProtectedRoute path='/travel' component={Travel} />
//             <ProtectedRoute path='/trending' component={Trending} />
//             <ProtectedRoute path='/userprofile' component={UserProfile} />

//             {/* <ProtectedRoute path='/travel' component={Travel}>
//             </ProtectedRoute>
//             <ProtectedRoute path='/trending' component={Trending}>
//             </ProtectedRoute>
//             <ProtectedRoute path='/userprofile' component={UserProfile}>
//             </ProtectedRoute> */}
//             {/* <Route path='*' component={() => "404 NOT FOUND"} /> */}

//         </Switch>
//     )
// }
// export default UserRoutes;