import React from 'react';
import './App.css';

//import some libraries
import { Route } from 'react-router-dom';

//import context providers
import TimeTableContextProvider from './context/TimeTableContext';
import AuthContextProvider from './context/AuthContext';

//import components
import Header from './components/layouts/Header';
import Home from './components/pages/Home';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import EditUserProfile from './components/user/EditUserProfile';
import DeleteUser from './components/user/DeleteUser';
import TimeTable from './components/time_table/TimeTable';
import TimeTableForm from './components/time_table/TImeTableForm';
import PrivateRoute from './components/auth/PrivateRoute';

function App() {
  return (
    <div className="App">
      <div className="main-container">

        <div className="container">
          <AuthContextProvider>
          <TimeTableContextProvider>

            <Header/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/sign-up" component={SignUp}/>
            <Route exact path="/login" component={Login}/>
            <PrivateRoute exact path="/time-table" component={TimeTable}/>
            <PrivateRoute exact path="/time-table/form" component={TimeTableForm}/>
            <PrivateRoute exact path="/edit-profile" component={EditUserProfile}/>
            <PrivateRoute exact path="/delete-user" component={DeleteUser}/>

          </TimeTableContextProvider>
          </AuthContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
