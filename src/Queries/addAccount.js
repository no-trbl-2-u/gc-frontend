import { gql } from 'apollo-boost'


const addAccountMutation = gql`
  mutation($username:String, $password:String, $email:String) {
    addAccount(
      username: $username,
      password: $password,
      email: $email
    ){
      id
      username
    }
  }
`

export default addAccountMutation