import React, { useState } from 'react'
import { graphql, compose } from 'react-apollo'
import './LoginForm.css'

import getAccountAuthorization from '../../Queries/authorizeAccount'

const LoginForm = ({getAuth}) => {
  // STATE
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  // handleFunctions
  const handleUsernameChange = ({target}) => setUsername(target.value)
  const handlePasswordChange = ({target}) => setPassword(target.value)
  
  const handleSubmit = e => {
    // Prevent redirect   
    e.preventDefault()

    console.log(getAuth)
    
    // window.location.pathname = "/"
  }
  

  return (
    <>
      <h1 className="LoginForm-Header">Login</h1>
      <form action="/" className="LoginForm-Container">
        {/* Username */}
        <input 
          type="text"
          name="username"
          value={ username }
          onChange={ handleUsernameChange }
          placeholder="Enter Username"
          autoComplete="off"
        />

        {/* Password */}
        <input 
          type="password" 
          name="password"
          value={ password }
          onChange={ handlePasswordChange }
          placeholder="Enter Password"
        />

        {/* Submit-Button */}
        <button
          type="submit" 
          className="submit-Button"
          onClick={ handleSubmit }
        >Submit
        </button>
      </form>
    </>
  )
}

export default compose(
  graphql(getAccountAuthorization, {name: 'getAccountLogin'})
)(LoginForm)
