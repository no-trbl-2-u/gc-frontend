import React, { useState, useEffect } from 'react'
import { graphql, compose } from 'react-apollo'
import validateForm from '../../Util/validateForm'
import './RegistrationForm.css'

import addAccountMutation from '../../Queries/addAccount';
import getAccounts from '../../Queries/getAccounts';

const RegistrationForm = ({getAccounts, addAccountMutation}) => {
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
  const handleSubmit = e => {
    // Prevent redirect   
    e.preventDefault()

    // Validate Form
    const isValid = validateForm(username, password, confirmPassword, email)

    // Send Mutation Query
    if(isValid){
      addAccountMutation({
        variables: {
          username,
          password,
          email
        }
      })
    
      alert("Account Registered")

      // redirect Home
      window.location.pathname = "/"
    }
  }

  // TODO: Trigger CSS effect or popUp
  const checkUsername = () => {
    const matchingUsernames = getAccounts.accounts.filter(ea => ea.username === username.toLowerCase())
    
    if(matchingUsernames.length){
      alert("Username Already Taken")
    }

    return matchingUsernames.length
      ? true
      : false
  }

  // HOOKS
  useEffect(() => {
    // Show all accounts
    // if(!getAccounts.loading){
    //   getAccounts.accounts.map(
    //     ea => console.log("username:", ea.username + ",","password:", ea.password)
    //   )
    // }
  })

  return (
    <>
      <h1 className="RegistrationForm-Header">Registration</h1>
      <form action="/" className="RegistrationForm-Container">
        {/* Username */}
        <input 
          type="text"
          name="username"
          value={ username }
          onChange={ handleUsernameChange }
          onBlur={ checkUsername }
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
          type="text" 
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
    </>
  )
}

// TODO: <Query mutation="..." />
export default compose(
  graphql(addAccountMutation, {name: 'addAccountMutation'}),
  graphql(getAccounts, {name: 'getAccounts'})
)(RegistrationForm)
