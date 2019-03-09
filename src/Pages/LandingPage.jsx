import React from 'react'
// import { graphql } from 'react-apollo'

// Components
import TopNavbar from '../Components/TopNavbar'
import BackgroundVideo from '../Components/BackgroundVideo/BackgroundVideo'
import { Segment, Container, Header } from 'semantic-ui-react';

import video from '../Components/BackgroundVideo/Live_Gameplay.mp4'

const backgroundStyle = {
  background: video
}

// TODO: Get the Header on top of the video.
// TODO: Set up Top-Half Container
// TODO: Set up Bottom-Half Container -> w/ Links to Outside World
// TODO: *OPTIONAL* Consider a Footer

// LandingPage :: GraphQLResults -> JSX.Element
const LandingPage = props => {
  return (
    <section
      style={ backgroundStyle }
      className="LandingPage-Container"
    >
      <TopNavbar />
      
      <section className="Top-Container">
        <h1 className="top-Header">Before</h1>
        <BackgroundVideo />
        <h1 className="inner-Header">Inner</h1>
      </section>

      <section className="Bottom-Container">
        <h1 className="bottom-Header">Outer</h1>
      </section>
      
    </section>
  )
}

// export default graphql(ACCOUNTS)(LandingPage)
export default LandingPage