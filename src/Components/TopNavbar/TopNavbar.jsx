import React, { useState } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { Link } from '@reach/router'
import './TopNavbar.css'


const TopNavbar = ({ handleToken, isLoggedIn }) => {
  const [activeItem, setActiveItem] = useState('Home')

  // handleNavbarClick :: Event -> State Change (Navbar, App)
  const handleNavbarClick = (event, { name }) => {
    setActiveItem(name)
    if(name === "Logout"){
      handleToken("LOGOUT")
    }
  }

  // JSX
  return(
    <Menu
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
      
      {/* Login */}
      <Menu.Menu position="right">
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

    </Menu>
  )
}

export default TopNavbar