import React from 'react'
import { Router } from '@reach/router'
import './App.css'

// Persistent Components
import TopNavbar from '../Components/TopNavbar/TopNavbar'

// Pages
import LandingPage from '../Pages/LandingPage'
import ScoreEntryPage from '../Pages/ScoreEntryPage'

const App = () => (
  <section className="App-container">
    <TopNavbar />
    <Router>
      <LandingPage path="/" />
      <ScoreEntryPage path="/addEntry" />
    </Router>
  </section>
)

export default App;
