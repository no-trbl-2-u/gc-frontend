import { gql } from 'apollo-boost'

const ACCOUNTS = gql`
  {
    accounts {
      username,
    }
  }
`

export default ACCOUNTS