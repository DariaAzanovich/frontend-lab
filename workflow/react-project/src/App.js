import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Sp } from './pages/Sp';

function App() {

    return (
        <BrowserRouter>

            <div className="container">
                <Switch>
                    <Route exact path={'/'}>
                        <Home />
                    </Route>
                    <Route path={'/sp'} component={Sp}/>
                </Switch>
            </div>
        </BrowserRouter>   
    );
}

export default App;
