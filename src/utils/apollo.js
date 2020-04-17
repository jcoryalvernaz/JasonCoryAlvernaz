import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import PropTypes from 'prop-types'
import React from 'react'
import fetch from 'isomorphic-fetch'

const propTypes = {
  element: PropTypes.element.isRequired,
}

const wrapRootElement = ({
  element,
}) => {
  const client = new ApolloClient({
    uri: process.env.GATSBY_COMMENTS_API,
    headers: {
      Authorization: `Bearer ${process.env.GATSBY_HASURA_TOKEN}`,
    },
    fetch,
  })

  return <ApolloProvider client={client}>{element}</ApolloProvider>
}

wrapRootElement.propTypes = propTypes

export default wrapRootElement
