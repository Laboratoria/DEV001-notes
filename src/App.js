import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Wall from './components/Wall';
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/wall' element={<Wall />}></Route>
      </Routes>
    </AuthProvider>
   )
}

export default App;
