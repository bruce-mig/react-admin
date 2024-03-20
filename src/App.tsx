import React from 'react';
import logo from './logo.svg';
import Icons from './components/Icons';
import './App.css';
import Nav from './components/Nav';
import Menu from './components/Menu';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './pages/users/Users';
import Register from './pages/Register';
import Login from './pages/Login';
import UserCreate from './pages/users/UserCreate';
import UserEdit from './pages/users/UserEdit';

function App() {
  return (
    <div className="App">
      <Icons />
      <BrowserRouter>
        <Routes>
          <Route path={'/'} Component={Dashboard} />
          <Route path={'/register'} Component={Register} />
          <Route path={'/login'} Component={Login} />
          <Route path={'/users'} Component={Users} />
          <Route path={'/users/create'} Component={UserCreate} />
          <Route path={'/users/:id/edit'} Component={UserEdit} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
