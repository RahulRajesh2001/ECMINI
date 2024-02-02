import React from 'react'
import Login from './components/login/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import SignUp from './components/signup/SignUp';
import { useSelector } from 'react-redux';

const App = () => {
  const token = useSelector((state) => state.login.token);

  return (
    <>
    <BrowserRouter>
    <Routes>

         <Route path="/" exact element={<HomePage />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<SignUp />} />


    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App