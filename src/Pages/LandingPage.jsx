import React from 'react'
// import { Segment, Container, Header } from 'semantic-ui-react'

// Components
import BackgroundVideo from '../Components/BackgroundVideo/BackgroundVideo'
import LandingPageBottomContainer from '../Containers/LandingPageBottom/LandingPageBottomContainer'
import HeaderOverVideo from '../Components/HeaderOverVideo/HeaderOverVideo';

// TODO: *OPTIONAL* Consider a Footer w/ Links to Outside World

const LandingPage = props => {
  return (
    <section className="LandingPage-Container">

      <section className="Top-Container">
        <HeaderOverVideo />
        <BackgroundVideo />
      </section>

      <LandingPageBottomContainer />
      
    </section>
  )
}

export default LandingPage