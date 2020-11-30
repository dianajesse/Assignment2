import React from 'react';
import Login from './Login';
import Home from './Home';
import NavBar from './NavBar';
import About from './About';
import {BrowserRouter as Router,Switch,Route} from  'react-router-dom';


function App() {
  return (
  <Router>
    <Switch>
    <Route path='/' component={Login}/>
    <NavBar/>
    <Route exact path='/Home' component={Home}/>
    <Route exact path='/About' component={About}/>
    </Switch>
  </Router>  
  )
}

export default App
