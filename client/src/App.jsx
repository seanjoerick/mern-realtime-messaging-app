import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login'; 
import Chat from './components/Chat';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/login" element={<Login />} />  
        <Route path="/chat" element={<Chat />} />   
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
