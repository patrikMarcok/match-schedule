// Routes.js
import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import App from './App';
import Trainings from './Trainings';
import MatchList from './MatchList';
import NavBar from './NavBar';
import TrainingDetail from './TrainingDetail';
import Admin from './Admin';
import AdminLogin from './AdminLogin';
import Rules from './Rules';


const AppRoutes = () => {
  return (
    
      <Routes>
        <Route path="/" exact component={App} />
        <Route path="/match-schedule" element={<MatchList />} />
        <Route path="/trainings" element={<Trainings/>} />
        <Route path="/trainings/:id" element={<TrainingDetail/>} />
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        <Route path="/rules" element={<Rules/>}/>
        
        
      </Routes>
    
  );
};
const RoutesComponent = () => {
    return (
      <Router>
        <NavBar />
        <AppRoutes />
      </Router>
    );
  };
export default RoutesComponent;
