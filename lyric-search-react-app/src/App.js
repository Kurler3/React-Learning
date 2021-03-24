import NavBar from './components/layout/NavBar'
import Index from './components/layout/Index'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react';

function App() {
  return (
    <Router>
      <React.Fragment>
        <NavBar/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Index} />
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
