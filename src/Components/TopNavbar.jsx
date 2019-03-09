import React, { useEffect, useState } from 'react'
import { Menu, Button } from 'semantic-ui-react'


const TopNavbar = props => {

  // #####################   STATE   #####################
  const [activeItem, setActiveItem] = useState('Home')

  // ###################   FUNCTIONS   ###################
  
  // handleNavbarClick :: Event -> State Change (Navbar, App)
  const handleNavbarClick = (event, { name }) => {
    setActiveItem(name)
    // TODO: Handle Routing
  }


  // ####################     JSX     ####################
  return(
    <Menu
      className="Menu-Container"
      size="large"
      inverted
      borderless
    >
      {/* Home */}
      <Menu.Item
        name='Home'
        active={ activeItem === 'Home' }
        onClick={ handleNavbarClick }
      >Home
      </Menu.Item>
      
      {/* Login | Register */}
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