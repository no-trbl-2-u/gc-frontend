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

  // Login TOKEN
  const TOKEN = localStorage.getItem('AUTH_TOKEN')
  ? localStorage.getItem('AUTH_TOKEN')
  : null

  // STATE
  const [AUTH_TOKEN, SET_AUTH_TOKEN] = useState("")
  const [isLoggedIn, setIsLoggedIn]  = useState(false)

  // FUNCTIONS

  // handleToken :: (action<"LOGIN" | "LOGOUT">, token<Empty | JWT>) -> State Change
  const handleToken = (action, token) => {
    switch(action){
      case "LOGOUT":
        if(localStorage.getItem('AUTH_TOKEN')) {
          localStorage.removeItem('AUTH_TOKEN')
          setIsLoggedIn(false)
          // SET_AUTH_TOKEN("")
        }else{
          console.log("Already logged out")
        }
        break;

      case "LOGIN":
        if(!localStorage.getItem('AUTH_TOKEN')) {
          localStorage.setItem('AUTH_TOKEN', token)
          // setIsLoggedIn(true)
          // SET_AUTH_TOKEN(localStorage.getItem('AUTH_TOKEN'))
        }else{
          console.log("Already Logged in")
        }
        break;

      default:
        break
    }
  }

  // Effects

  // Checks if token exists, sets it to state
  useEffect(() => {
    if(TOKEN !== null) {
      SET_AUTH_TOKEN(TOKEN)
      setIsLoggedIn(true)
      console.log("Triggered")
    }
  }, [AUTH_TOKEN])

  // JSX (Routes)
  return (
    <section className="App-container">
      <TopNavbar
        isLoggedIn={ isLoggedIn }
        handleToken={ handleToken }
      />
      <Router>
        <LandingPage path="/" />
        <ScoreEntryPage path="/addEntry" />
        <RegistrationPage path="/register" />
        <LoginPage 
          path="/login" 
          handleToken={ handleToken }
        />
      </Router>
    </section>
  )
}

export default App;
