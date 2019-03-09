import React from 'react'
import { graphql } from 'react-apollo'
import ACCOUNTS from '../Queries/getAccounts'

// Components
import Banner from '../Components/Banner'

// TODO: Use a <Query ... /> Component 

// TMP - Example Usage of Data
const EXAMPLE = data => (
  data.loading
    ? <h1>Loading...</h1>
    : <Banner account={ data.accounts[0].username } />
)


// LandingPage :: GraphQLResults -> JSX.Element
const LandingPage = ({ data }) => {
  return (
    <section className="LandingPage-Container">
      {
        EXAMPLE(data)
      }
    </section>
  )
}

export default graphql(ACCOUNTS)(LandingPage)
