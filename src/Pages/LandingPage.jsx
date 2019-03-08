import React from 'react'
import { graphql } from 'react-apollo'
import ACCOUNTS from '../Queries/getAccounts'

// Components
import Banner from '../Components/Banner'

// TODO: Use a <Query ... /> Component 

// LandingPage :: GraphQLResults -> JSX.Element
const LandingPage = ({ data }) => {
  return (
    <section className="LandingPage-Container">
      {/* A simple test to see if the data is being fetched correctly */}
      {
        data.loading
          ? <h1>Loading...</h1>
          : <Banner account={ data.accounts[0].username } />
      }
    </section>
  )
}

export default graphql(ACCOUNTS)(LandingPage)
