import React, { useState, useEffect } from 'react'
import { graphql, compose } from 'react-apollo'
import validateForm from '../../Util/validateForm'
import './RegistrationForm.css'

// TEST MUTATION
import addAccountMutation from '../../Queries/addAccount';
import getAccounts from '../../Queries/getAccounts';

// {getAccounts, addAccountMutation}
const RegistrationForm = (props) => {
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

    // Validate Form
    const isValid = validateForm(username, password, confirmPassword, email)
    
    // Prevent Submit if not valid
    if(!isValid) e.preventDefault()

    // Send Mutation Query

    // TODO: Add Variables to query in ../../queries    
    // TODO: Hash Password
    // props.addAccountMutation(username, password, email)
  }

  // HOOKS
  useEffect(() => {
    // Show all accounts
    // if(!props.getAccounts.loading){
    //   props.getAccounts.accounts.map(ea => console.log(ea.username))
    // }
    console.log("Mounted")
  }, [])

  // TODO: form action="url_to_desired_page"
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
    </>
  )
}

// TODO: <Query mutation="..." />
export default compose(
  graphql(addAccountMutation, {name: 'addAccountMutation'}),
  graphql(getAccounts, {name: 'getAccounts'})
)(RegistrationForm)
