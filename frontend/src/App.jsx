import React,{useState,useEffect} from 'react'
import Login from './components/login/Login'
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import HomePage from './pages/HomePage';
import SignUp from './components/signup/SignUp';


export const LoginContext =React.createContext()
const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && !logout){
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [logout]);

  const handleLogin = () => {
    setIsLogin(true);
  };



  const handleLogout = () => {
    setIsLogin(false);
    setLogout(true);
    localStorage.removeItem('token')
  };


  const contextValue = {
    handleLogin,
    handleLogout,
  };


  return (
  
    <LoginContext.Provider value={contextValue}>
    <BrowserRouter>
    <Routes>

      {!isLogin ? <>
        <Route path="/login" element={<Login />} />
         <Route path="/register" element={<SignUp />} />
         <Route path='*' element={<Navigate to='/login' />} />
      </>:<>
      <Route path="/" exact element={<HomePage />} />
      <Route path='*' element={<Navigate to='/' />} />
      </>}





    </Routes>
    </BrowserRouter>
    </LoginContext.Provider>

  
  )
}

export default App