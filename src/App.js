import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Profile from './components/body/profile/profile';
import Friends from './components/body/friends/friends';
import Messeges from './components/body/messeges/messeges';

const App = (props) => {
  return (
    <div className='App'>
      <Header />
      <Nav navPage={props.state.navPage} />
      <div className='Body'>
        <Routes>
          <Route path='/profile' element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
          <Route path='/friends' element={<Friends friendsPage={props.state.friendsPage} dispatch={props.dispatch} />} />
          <Route path='/messeges' element={<Messeges messegesPage={props.state.messegesPage} dispatch={props.dispatch} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
