import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login'; 
import Chat from './components/Chat';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/login" element={<Login />} />  
        <Route path="/chat" element={<Chat />} />   
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
