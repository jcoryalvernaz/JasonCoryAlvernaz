import FormHeadingStyles from 'styles/FormHeadingStyles'
import FormStyles from 'styles/FormStyles'
import PropTypes from 'prop-types'
import SectionStyles from 'styles/SectionStyles'
import gql from 'graphql-tag'
import { submitFormData } from 'utils/helpers'
import { useMutation } from '@apollo/react-hooks'
import React, {
  useCallback,
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

const CommentSubmit = ({
  count,
  slug,
}) => {
  const [state, setState] = useState({
    newComment: {
      name: '',
      text: '',
    },
  })

  const [submitComment, { data, loading, error, called }] = useMutation(
    SUBMIT_COMMENT_MUTATION
  )

  const handleChange = useCallback(
    e => {
      const { newComment } = state
      setState({
        newComment: { ...newComment, [e.target.name]: e.target.value },
      })
    },
    [setState]
  )

  const handleSubmit = useCallback(
    e => {
      e.preventDefault()
      submitComment({ variables: { name, text, slug } })
      submitFormData(e, state.newComment)
      setState({ newComment: { name: '', text: '' } })
    },
    [setState, submitComment, submitFormData]
  )

  const {
    newComment: { name, text },
  } = state

  return (
    <SectionStyles className="comments">
      <FormHeadingStyles>
        {error && (
          <h2 className="error">Ooops! {JSON.stringify(error, null, 2)}</h2>
        )}
        {data && (
          <h2>
            Thanks {data.insert_comments.returning[0].name} for Submitting Your
            Comment!
          </h2>
        )}
        {!called || loading ? (
          <h2>{count === 0 ? 'Be the First to ' : ''}Leave a Comment</h2>
        ) : (
          ''
        )}
      </FormHeadingStyles>
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
        <button disabled={!name || !text || loading} type="submit">
          Submit{loading ? 'ting' : ''}
        </button>
      </FormStyles>
    </SectionStyles>
  )
}

CommentSubmit.propTypes = propTypes

export default CommentSubmit
