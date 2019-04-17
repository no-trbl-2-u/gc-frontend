import { gql } from 'apollo-boost'


const LOGIN_MUTATION = gql`
  mutation ($username:String!, $password:String!) {
    accountLogin(
      username: $username,
      password: $password,
    ){
      username
      token
    }
  }
`

export default LOGIN_MUTATION