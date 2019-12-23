import React, { useState } from "react"
import PropTypes from "prop-types"
import { useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"
import { submitFormData } from "../utils/helpers"

import SectionStyles from "../styles/SectionStyles"
import FormStyles from "../styles/FormStyles"
import FormHeadingStyles from "../styles/FormHeadingStyles"

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

const CommentSubmit = ({ count, slug }) => {
  const [state, setState] = useState({
    newComment: {
      name: "",
      text: "",
    },
  })

  const handleChange = e => {
    const { newComment } = state
    setState({
      newComment: { ...newComment, [e.target.name]: e.target.value },
    })
  }

  const {
    newComment: { name, text },
  } = state

  const [submitComment, { data, loading, error, called }] = useMutation(
    SUBMIT_COMMENT_MUTATION
  )

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
          <h2>{count === 0 ? "Be the First to " : ""}Leave a Comment</h2>
        ) : (
          ""
        )}
      </FormHeadingStyles>
      <FormStyles
        name="comment"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={e => {
          e.preventDefault()
          submitComment({ variables: { name, text, slug } })
          submitFormData(e, state.newComment)
          setState({ newComment: { name: "", text: "" } })
        }}
      >
        <input type="hidden" name="form-name" value="comment" />
        <input
          type="text"
          name="name"
          className="comment-name"
          placeholder="Name"
          aria-label="Enter Name"
          onChange={handleChange}
          value={name}
          required
        />
        <textarea
          name="text"
          className="comment-text"
          placeholder="Comment"
          aria-label="Enter Comment"
          onChange={handleChange}
          value={text}
          required
        />
        <button type="submit" disabled={!name || !text || loading}>
          Submit{loading ? "ting" : ""}
        </button>
      </FormStyles>
    </SectionStyles>
  )
}

CommentSubmit.propTypes = {
  count: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
}

export default CommentSubmit
