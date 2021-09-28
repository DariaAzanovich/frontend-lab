import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SearchCocktail from './pages/SearchCocktail';
import Navbar from './components/Navbar';
import { getInitialState } from './redux/action-creators/authActions';
import { connect } from 'react-redux';
import history from './redux/history';


function App( props ) {
    useEffect(props.getInitialState, []);

    return (
        <BrowserRouter>
            <div className="app-container" id="app">
                <Navbar />
                <Router history={history}>
                    <Switch>
                        <Route exact path={'/'}>
                            <Home />
                        </Route>
                        {props.isAuth && 
                            <Route path={'/search'}>
                                <SearchCocktail />
                            </Route>
                        }
                    </Switch>
                </Router>
                
            </div>
        </BrowserRouter>   
    );
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    };
    
};

const mapDispatchToProps = { getInitialState };

export default connect(mapStateToProps, mapDispatchToProps)(App);
