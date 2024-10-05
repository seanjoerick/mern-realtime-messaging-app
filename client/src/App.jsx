import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login'; 
import Chat from './components/Chat';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';

const App = () => {
  const { authUser } = useAuthContext();
  
  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/' element={ authUser ? <Chat /> : <Navigate to={'/login'}/>} /> 
        <Route path='/login' element={ authUser ? <Navigate to={'/'}/> : <Login />} /> 
        <Route path='/signup' element={ authUser ? <Navigate to={'/'}/> : <SignUp />} /> 
      </Routes>
    </>
  );
};

export default App;
