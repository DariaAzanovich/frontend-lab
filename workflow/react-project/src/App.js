import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import { Sp } from './pages/Sp';
import Navbar from './components/Navbar';
import { getInitialState } from './redux/action-creators/authActions';
import { connect } from 'react-redux';


function App({ getInitialState }) {
    useEffect(getInitialState, []);

    return (
        <BrowserRouter>
            <div className="app-container" id="app">
                <Navbar />
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

const mapDispatchToProps = { getInitialState };

export default connect(null, mapDispatchToProps)(App);
