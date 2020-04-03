import React from 'react';
import './App.css';

//import some libraries
import { Route } from 'react-router-dom';

//import components
import Header from './components/layouts/Header';
import Home from './components/pages/Home';
import Project from './components/pages/Project';
import CV from './components/pages/CV';



function App() {
  return (
    <div className="app">
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/project" component={Project}/>
      <Route exact path="/cv" component={CV}/>
    </div>
  );
}

export default App;
