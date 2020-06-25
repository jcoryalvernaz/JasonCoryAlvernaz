import { FormStyles } from 'styles'
import Heading from './Heading'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import React, {
  Fragment,
  useState,
} from 'react'

const SUBMIT_COMMENT_MUTATION = gql`
  mutation SubmitComment($name: String!, $text: String!, $slug: String!) {
    insert_comments(
      objects: {
        name: $name
        text: $text
        slug: $slug
        parent_comment_id: null
      }
    ) {
      returning {
        name
      }
    }
  }
`

const propTypes = {
  count: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
}

const initialState = {
  name: '',
  text: '',
}

const Form = ({
  count,
  slug,
}) => {
  const [comment, setComment] = useState(initialState)

  const { name, text } = comment

  const resetForm = () => {
    setComment(initialState)
  }

  const [submitComment, { data, loading, error, called }] = useMutation(
    SUBMIT_COMMENT_MUTATION, {
      onCompleted: resetForm,
    }
  )

  const handleChange = e => {
    const { name, value } = e.target
    setComment({
      ...comment,
      [name]: value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    submitComment({ variables: { name, text, slug } })
  }

  return (
    <Fragment>
      <Heading>
        {error && `Ooops! ${JSON.stringify(error, null, 2)}`}
        {data && `Thank you ${data.insert_comments.returning[0].name}!`}
        {(!called || loading) && `${count === 0 && 'Be the First to '}Leave a Comment`}
      </Heading>
      {/* eslint-disable react/jsx-no-bind */}
      <FormStyles
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        method="post"
        name="comment"
        onSubmit={handleSubmit}
      >
        <input name="form-name" type="hidden" value="comment" />
        <input
          aria-label="Enter Name"
          className="comment-name"
          name="name"
          onChange={handleChange}
          placeholder="Name"
          required
          type="text"
          value={name}
        />
        <textarea
          aria-label="Enter Comment"
          className="comment-text"
          name="text"
          onChange={handleChange}
          placeholder="Comment"
          required
          value={text}
        />
        {/* eslint-enable react/jsx-no-bind */}
        <button disabled={!name || !text || loading} type="submit">
          Submit{loading && 'ting'}
        </button>
      </FormStyles>
    </Fragment>
  )
}

Form.propTypes = propTypes

export default Form
