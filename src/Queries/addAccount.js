import { gql } from 'apollo-boost'


const addAccountMutation = gql`
  mutation {
    addAccount(
      username:"admin3",
      password:"admin3",
      email:"admin3@gmail.com"
    ){
      id
    }
  }
`

export default addAccountMutation