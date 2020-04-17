import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import React from 'react'
import fetch from 'isomorphic-fetch'

export function wrapRootElement({ element }) {
  const client = new ApolloClient({
    uri: process.env.GATSBY_COMMENTS_API,
    headers: {
      Authorization: `Bearer ${process.env.GATSBY_HASURA_TOKEN}`,
    },
    fetch,
  })

  return <ApolloProvider client={client}>{element}</ApolloProvider>
}
