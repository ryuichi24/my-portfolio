import React from 'react';
import './App.css';

//import some libraries
import { Route } from 'react-router-dom';

import Header from './components/layouts/Header';
import Home from './components/pages/Home';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import AccountSetting from './components/pages/AccountSetting';
import VideoLinks from './components/video_link/VideoLinks';


//import context provider
import AuthContextProvider from './context/AuthContext';
import VideoLinkContextProvider from './context/VideoLinkContext';

//import private route
import PrivateRoute from './components/auth/PrivateRoute';


function App() {
  return (
    <div className="app">
      <AuthContextProvider>
      <VideoLinkContextProvider>
        <Header/>
        <div className="main-wrapper">
          <Route exact path="/" component={Home}/>
          <PrivateRoute exact path="/videos" component={VideoLinks}/>
          <Route exact path="/sign-up" component={SignUp}/>
          <Route exact path="/login" component={Login}/>
          <PrivateRoute exact path="/account-setting" component={AccountSetting}/>
        </div>
        </VideoLinkContextProvider>
      </AuthContextProvider>
    </div>
  );
}
export default App;
