import React from 'react'
// import { graphql } from 'react-apollo'

// Components
import TopNavbar from '../Components/TopNavbar'
import BackgroundVideo from '../Components/BackgroundVideo/BackgroundVideo'
import { Segment, Container, Header } from 'semantic-ui-react';

// LandingPage :: GraphQLResults -> JSX.Element
const LandingPage = props => {
  return (
    <Segment
      inverted
      className="LandingPage-Container"
    >
      <TopNavbar />
      
      <section>
        {/* <BackgroundVideo /> */}
        <h1 className="inner-Header">Groove Catcher VR</h1>
      </section>
      
    </Segment>
  )
}

// export default graphql(ACCOUNTS)(LandingPage)
export default LandingPage