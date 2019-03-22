import React, { useState, useEffect } from 'react'
import validateForm from '../../Util/validateForm'
import './RegistrationForm.css'

const RegistrationForm = props => {
  // STATE
  const [username, setUsername]                 = useState("")
  const [password, setPassword]                 = useState("")
  const [confirmPassword, setConfirmedPassword] = useState("")
  const [email, setEmail]                       = useState("")

  // handleFunctions
  const handleUsernameChange = ({target}) => setUsername(target.value)
  const handlePasswordChange = ({target}) => setPassword(target.value)
  const handleConfPassChange = ({target}) => setConfirmedPassword(target.value)
  const handleEmailChange    = ({target}) => setEmail(target.value)

  const handleSubmit = (e) => {

    // Validate Form
    const isValid = validateForm(username, password, confirmPassword, email)
    
    if(!isValid) e.preventDefault()

    console.log(isValid)
    // Send Mutation Query
    // Redirect to HomePage or LoginPage
  }

  // HOOKS
  useEffect(() => console.log("Registration Mounted"), [])


  // TODO: form action="url_to_desired_page"
  return (
    <>
      <h1 className="RegistrationForm-Header">Registration</h1>
      <section>
        <form action="/" className="RegistrationForm-Container">
          {/* Username */}
          <input 
            type="text"
            name="username"
            value={ username }
            onChange={ handleUsernameChange }
            onBlur={() => {}}
            placeholder="Enter Desired Username"
            autoComplete="off"
          />

          {/* Password */}
          <input 
            type="password" 
            name="password"
            value={ password }
            onChange={ handlePasswordChange }
            placeholder="Enter Password Here"
          />

          {/* Confirm Password */}
          <input 
            type="password"
            name="confirmPassword"
            value={ confirmPassword }
            onChange={ handleConfPassChange }
            placeholder="Enter Password Here"
          />

          {/* Email */}
          <input 
            type="email" 
            name="email"
            value={ email }
            onChange={ handleEmailChange }
            placeholder="Enter Email Here"
          />

          {/* Submit-Button */}
          <button
            type="submit" 
            className="submit-Button"
            onClick={ handleSubmit }
          >Submit
          </button>
        </form>
      </section>
    </>
  )
}

export default RegistrationForm
