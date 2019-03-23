import { gql } from 'apollo-boost'

const getAccounts = gql`
  {
    accounts {
      id,
      username,
      password,
      email
    }
  }
`

export default getAccounts