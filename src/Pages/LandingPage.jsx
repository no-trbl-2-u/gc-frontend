import React from 'react'
import { Segment, Container, Header } from 'semantic-ui-react'

// Components
import BackgroundVideo from '../Components/BackgroundVideo/BackgroundVideo'

import LandingPageBottomContainer from '../Containers/LandingPageBottom/LandingPageBottomContainer'
import HeaderOverVideo from '../Components/HeaderOverVideo/HeaderOverVideo';

// TODO: Set up Top-Half Container
// TODO: Set up Links to Outside World in Bottom
// TODO: *OPTIONAL* Consider a Footer

// LandingPage :: GraphQLResults -> JSX.Element
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

// export default graphql(ACCOUNTS)(LandingPage)
export default LandingPage