import React, { useState, useEffect } from 'react'
import { Router } from '@reach/router'
import './App.css'

// Persistent Components
import TopNavbar from '../Components/TopNavbar/TopNavbar'

// Pages
import LandingPage from '../Pages/LandingPage'
import ScoreEntryPage from '../Pages/ScoreEntryPage'
import RegistrationPage from '../Pages/RegistrationPage';
import LoginPage from '../Pages/LoginPage'

const App = () => {
  // STATE
  const [AUTH_TOKEN, SET_AUTH_TOKEN] = useState("")

  // EFFECTS
  useEffect(() => {
    const TOKEN = localStorage.getItem('AUTH_TOKEN')
      ? localStorage.getItem('AUTH_TOKEN')
      : null
    
    if(TOKEN !== null) {
      SET_AUTH_TOKEN(TOKEN)
    }

  }, [AUTH_TOKEN])

  return (
    <section className="App-container">
      <TopNavbar token={ AUTH_TOKEN } />
      <Router>
        <LandingPage path="/" />
        <ScoreEntryPage path="/addEntry" />
        <RegistrationPage path="/register" />
        <LoginPage path="/login"/>
      </Router>
    </section>
  )
}

export default App;
