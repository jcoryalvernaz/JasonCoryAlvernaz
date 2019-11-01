import fetch from "isomorphic-fetch"
import React from "react"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"

export const wrapRootElement = ({ element }) => {
  const client = new ApolloClient({
    uri: process.env.GATSBY_COMMENTS_API,
    headers: {
      Authorization: `Bearer ${process.env.GATSBY_HASURA_TOKEN}`,
    },
    fetch,
  })

  return <ApolloProvider client={client}>{element}</ApolloProvider>
}
