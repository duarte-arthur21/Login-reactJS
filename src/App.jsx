import './App.css'
import React from 'react';
import {Route, Routes} from 'react-router-dom'
import { Home, About, Profile } from './templates/AppTemplate';
import { AuthTemplate } from './templates/AuthTemplate';

function App() {

  return (
    <>
    <AuthTemplate />

    </>
  )
}

export default App
