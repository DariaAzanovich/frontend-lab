import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Sp } from './pages/Sp';
import { Navbar } from './components/Navbar';
import Modal from './components/Modal';

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
      <BrowserRouter>
        {openModal && <Modal closeModal={setOpenModal}/>}
        
        <Navbar closeModal={setOpenModal}/>

        <div className="container">
          <Switch>
            <Route exact path={'/'}>
              <Home closeModal={setOpenModal} />
            </Route>
            <Route path={'/sp'} component={Sp}/>

          </Switch>
        </div>
      </BrowserRouter>   
  );
}

export default App;
