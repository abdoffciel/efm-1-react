import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Experts1 from './components/Expert1';
import Formulaire from './components/Formulaire';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='container-fluid'> 
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Experts1 />} />
          <Route path="/formulaire" element={<Formulaire />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
