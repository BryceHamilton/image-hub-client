import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/private-route';
import Home from './views/home';
import Login from './views/login';
import Profile from './views/profile';
import Signup from './views/signup';
import Upload from './views/upload';

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/login' component={Login} />
      <PrivateRoute exact path='/profile' component={Profile} />
      <PrivateRoute exact path='/upload' component={Upload} />
    </Switch>
  );
};

export default AppRoutes;
