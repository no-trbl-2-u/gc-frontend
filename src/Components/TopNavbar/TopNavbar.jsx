import React, { useState } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { Link } from '@reach/router'
import './TopNavbar.css'


const TopNavbar = ({ handleToken, isLoggedIn }) => {
  // State
  const [activeItem, setActiveItem] = useState('Home')

  // Handlers
  const handleNavbarClick = (event, { name }) => {
    setActiveItem(name)
    if(name === "Logout"){
      handleToken("LOGOUT")
    }
  }

  // Templates
  const loggedInTabs = () => {
    return (
      <Menu.Menu position="right">
        {/* Logout */}
        <Menu.Item
          as={ Link }
          to="/"
          name='Logout'
          active={ activeItem === 'Logout' }
          onClick={ handleNavbarClick }
          position="right"
        >
        </Menu.Item>
      </Menu.Menu>
    )
  }
  const loggedOutTabs = () => {
    return (
        <Menu.Menu position="right">
        {/* Login */}
        <Menu.Item
          as={ Link }
          to="/login"
          name='Login'
          active={ activeItem === 'Login' }
          onClick={ handleNavbarClick }
        >
          <Button>Log-In</Button>
        </Menu.Item>

        {/* Register */}
        <Menu.Item
          as={ Link }
          to="/register"
          name='Register'
          active={ activeItem === 'Register' }
          onClick={ handleNavbarClick }
          position="right"
        >
          <Button>Register</Button>
        </Menu.Item>
      </Menu.Menu>
    )
  }

  // Root JSX
  return (
    <Menu
      as="section"
      className="TopNavbar-Container"
      size="massive"
      inverted
      borderless
      color="black"
    >
      {/* Home */}
      <Menu.Item
        as={ Link }
        to="/"
        name='Home'
        active={ activeItem === 'Home' }
        onClick={ handleNavbarClick }
      >Home
      </Menu.Item>

      {
        isLoggedIn
          ? loggedInTabs()
          : loggedOutTabs()
      }

    </Menu>
  )
}

export default TopNavbar