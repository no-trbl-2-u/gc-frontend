import React from 'react'
import { Router } from '@reach/router'
import './App.css'

// Persistent Components
import TopNavbar from '../Components/TopNavbar/TopNavbar'

// Pages
import LandingPage from '../Pages/LandingPage'
import ScoreEntryPage from '../Pages/ScoreEntryPage'
import RegistrationPage from '../Pages/RegistrationPage';
import LoginPage from '../Pages/LoginPage'

const App = () => (
  <section className="App-container">
    <TopNavbar />
    <Router>
      <LandingPage path="/" />
      <ScoreEntryPage path="/addEntry" />
      <RegistrationPage path="/register" />
      <LoginPage path="/login"/>
    </Router>
  </section>
)

export default App;
