import React, { useEffect, useState } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { Link } from '@reach/router'
import './TopNavbar.css'


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
      className="Menu-Container"
      size="massive"
      inverted
      borderless
    >
      {/* Home */}
      <Link to="/">
        <Menu.Item
          name='Home'
          active={ activeItem === 'Home' }
          onClick={ handleNavbarClick }
        >Home
        </Menu.Item>
      </Link>

      {/* Score Entry */}
      <Link to="/addEntry">
        <Menu.Item
          name='Enter Score'
          active={ activeItem === 'EnterScore' }
          onClick={ handleNavbarClick }
        >
        </Menu.Item>
      </Link>


      {/* TODO: Add <Link />*/}
      {/* Login | Register  */}
      <Menu.Menu position="right">
        <Menu.Item
          name='Login'
          active={ activeItem === 'Login' }
          onClick={ handleNavbarClick }
        >
          <Button>Log-In</Button>
        </Menu.Item>

        <Menu.Item
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