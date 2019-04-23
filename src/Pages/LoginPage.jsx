import React from 'react'
import LoginForm from '../Components/LoginForm/LoginForm';

function LoginPage ({handleToken}) {
  return (
    <section>
      <LoginForm handleToken={ handleToken }/>
    </section>
  )
}

export default LoginPage