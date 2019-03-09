import React from 'react'
import './App.css'

// Pages
import LandingPage from '../Pages/LandingPage'

// TODO: INSTALL-CMD $ npm i @reach/router --save

// TODO: Configure <Router /> -> CONSIDER: TopNavBar Inside or Outside 

const App = () => (
  <section className="App-container">
    <LandingPage />
  </section>
)

export default App;
