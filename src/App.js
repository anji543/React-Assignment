import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


import Header  from "./components/headercomponent";
import Footer from "./components/footercomponent";

import { MainPage } from "./pages/index";
import { NextPage2 } from "./pages/NextPage2";
import { NextPage3 } from "./pages/NextPage3";


function App() {
  return (
      <Router>
        <Header/>
        <br/>
        <div className="jumbotron text-center rounded-lg mt-3">
          <h1>Title that is going to be present on all pages</h1>
        </div>
        <div className="container text-center shadow-lg p-4 mb-4 bg-white rounded-lg">
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/NextPage2" component={NextPage2}/>
          <Route exact path="/NextPage3" component={NextPage3}/>
          
        </div>
        <Footer/>
      </Router>
    
  );
}

export default App;
