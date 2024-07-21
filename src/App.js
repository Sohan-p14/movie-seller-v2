import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import UpdateInfo from './pages/UpdateInfo';
import AddMovie from './pages/AddMovie';
import UpdateMovie from './pages/UpdateMovie';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/update-info" element={<UpdateInfo />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/update-movie/:id" element={<UpdateMovie />} />
      </Routes>
    </div>
  );
};

export default App;
