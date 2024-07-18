import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Citas from './pages/Citas';
import Consultorios from './pages/Consultorios';
import Medicos from './pages/Medicos';
import Pacientes from './pages/Pacientes';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/citas" />} />
        <Route path="/citas" element={<Citas />} />
        <Route path="/consultorios" element={<Consultorios />} />
        <Route path="/medicos" element={<Medicos />} />
        <Route path="/pacientes" element={<Pacientes />} />
      </Routes>
    </Router>
  );
};

export default App;
