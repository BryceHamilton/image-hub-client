import React from 'react';
import { Switch, Route } from 'react-router-dom';
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
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/upload' component={Upload} />
    </Switch>
  );
};

export default AppRoutes;
