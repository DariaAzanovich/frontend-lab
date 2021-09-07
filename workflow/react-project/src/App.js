import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Sp } from './pages/Sp';
import { Navbar } from './components/Navbar';

function App() {
  return (
      <BrowserRouter>
        <Navbar />

        <div className="container">
          <Switch>
            <Route path={'/'} exact component={Home}/>
            <Route path={'/sp'} component={Sp}/>

          </Switch>
        </div>
      </BrowserRouter>   
  );
}

export default App;
