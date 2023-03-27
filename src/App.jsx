import './App.css'
import React from 'react';
import {Route, Routes} from 'react-router-dom'
import { Home, About, Profile } from './templates/AppTemplate';
import { AuthTemplate } from './templates/AuthTemplate';

function App() {

  return (
    <>
    <AuthTemplate />
        <Routes>
            <Route path='/dashboard' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/profile' element={<Profile/>} />
        </Routes>

    </>
  )
}

export default App
