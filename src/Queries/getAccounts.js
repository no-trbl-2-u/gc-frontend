import { gql } from 'apollo-boost'

const getAccounts = gql`
  {
    accounts {
      username,
      email
    }
  }
`

export default getAccounts