import { gql } from 'apollo-boost'


const getAccountAuthorization = gql`
  query($username:String, $password:String) {
    accountLogin(
      username: $username,
      password: $password,
    ){
      username
      token
    }
  }
`

export default getAccountAuthorization