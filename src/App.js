import React from 'react';
import SignUp from './Components/Registration/SignUp';
import Home from './Components/Home/Home';
import { Route, Routes, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Routes>
      <Route path = '/signUp' element={<SignUp/>}></Route>
      <Route path = '/' element={<Home/>}></Route>
    </Routes>
    </>
  )
}

export default App;