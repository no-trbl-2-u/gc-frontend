import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import App from './App/App';

const client = new ApolloClient({
  uri: 'https://gc-backend.herokuapp.com/gql'
})

ReactDOM.render(
  <ApolloProvider client={ client } >
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
