import React, { useState } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { Link } from '@reach/router'
import './TopNavbar.css'


// TODO: <Menu as="Link" />

const TopNavbar = props => {

  // #####################   STATE   #####################
  const [activeItem, setActiveItem] = useState('Home')

  // ###################   FUNCTIONS   ###################
  
  // handleNavbarClick :: Event -> State Change (Navbar, App)
  const handleNavbarClick = (event, { name }) => {
    setActiveItem(name)
  }


  // ####################     JSX     ####################
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

      {/* Score Entry */}
      <Menu.Item
        as={ Link }
        to="/addEntry"
        name='Enter Score'
        active={ activeItem === 'EnterScore' }
        onClick={ handleNavbarClick }
      >
      </Menu.Item>

      {/* Login | Register  */}
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

    </Menu>
  )
}

export default TopNavbar