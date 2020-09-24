import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Display from './Components/Display/Display';
import Booking from './Components/Booking/Booking';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Destination from './Components/Destination/Destination';
import NoMatch from './Components/NoMatch/NoMatch';


export const UserContext = createContext()
function App() {
  const [loggedInUser , setLoggedInUser]= useState({
        // isSignIn : false,
        name :'',
        emails:'',
        photo :'',
        password :'',
        message :'',
  }) 
  return (
  <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router> 
      <Switch>
          <Route path='/home'>
              <Display></Display>
          </Route>
          <Route path='/news'>
              <Display></Display>
          </Route>
          <Route path='/booking/:Id'>
              <Booking></Booking>
          </Route>
          <PrivateRoute path='/destination'>
              <Destination/>
          </PrivateRoute>
          <Route path='/login'>
              <Login></Login>
          </Route>
          <Route exact path='/'>
              <Display></Display>
          </Route>
          <Route  path='*'>
              <NoMatch/>
          </Route>
      </Switch>
    </Router>
  </UserContext.Provider>
  );
}

export default App;
