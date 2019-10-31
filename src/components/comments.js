import React, { useState } from "react"
import { useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"
import moment from "moment"
import styled from "styled-components"

import SectionStyles from "../styles/SectionStyles"
import FormStyles from "../styles/FormStyles"
import CommentsStyles from "../styles/CommentsStyles"

const CommentsHeading = styled.div`
  h2 {
    text-align: center;
    justify-self: center;
    position: relative;
    margin-bottom: 0;
    font-size: 2.5rem;
    color: ${props => props.theme.white};
    text-shadow: -1px 1px 2px rgba(0, 0, 0, 0.2);
  }
  //TODO style success/error message differently
`

const SUBMIT_COMMENT = gql`
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

const Comments = ({ comments, slug, postTitle }) => {
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

  const formTitle = commentsLength => {
    if (commentsLength < 1) {
      return "Be the First to Leave a Comment"
    } else {
      return "Leave a Comment"
    }
  }

  const commentsTitle = commentsLength => {
    if (commentsLength === 1) {
      return `1 Reply for ${postTitle}`
    } else if (commentsLength > 1) {
      return `${commentsLength} Replies for ${postTitle}`
    } else {
      return `No Replies for ${postTitle}`
    }
  }

  const {
    newComment: { name, text },
  } = state

  const [submitComment, { data, loading, error, called }] = useMutation(
    SUBMIT_COMMENT
  )

  return (
    <>
      <SectionStyles className="comments">
        <CommentsHeading>
          {loading && <h2>Sending Comment...</h2>}
          {error && <h2>Ooops! {JSON.stringify(error, null, 2)}</h2>}
          {data && (
            <h2>
              Thanks {data.insert_comments.returning[0].name} for Submitting
              Your Comment!
            </h2>
          )}
          {!called && <h2>{formTitle(comments.length)}</h2>}
        </CommentsHeading>
        <FormStyles
          name="comment"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={e => {
            e.preventDefault()
            submitComment({ variables: { name: name, text: text, slug: slug } })
            setState({ newComment: { name: "", text: "" } })
          }}
        >
          <input type="hidden" name="form-name" value="comment" />
          <input type="hidden" name="botfield" onChange={handleChange} />
          <input
            type="text"
            name="name"
            className="comment-name"
            id="name"
            placeholder="Name"
            aria-label="Enter Name"
            onChange={handleChange}
            value={name}
            minLength="3"
            maxLength="255"
            required
          />
          <textarea
            name="text"
            className="comment-text"
            id="text"
            placeholder="Comment"
            aria-label="Enter Comment"
            onChange={handleChange}
            value={text}
            minLength="20"
            maxLength="1000"
            required
          />
          <button
            type="submit"
            disabled={!name || !text || text.length < 20 || loading}
          >
            Submit
          </button>
        </FormStyles>
      </SectionStyles>
      <CommentsStyles>
        <h2 className="comments-count">{commentsTitle(comments.length)}</h2>
        {comments.length > 0 &&
          comments
            .filter(comment => comment.moderated)
            .filter(comment => !comment.parent_comment_id)
            .map((comment, i) => {
              let child
              if (comment.id) {
                child = comments.find(c => comment.id === c.parent_comment_id)
              }
              return (
                <div className="comment" key={i}>
                  <header>
                    <h2>{comment.name}</h2>
                    <div className="comment-date">
                      {moment(comment.date).fromNow()}
                    </div>
                  </header>
                  <p className="comment-text">{comment.text}</p>
                  {child && child.moderated && (
                    <div className="comment-reply">
                      <header>
                        <h2>{child.name}</h2>
                        <div className="comment-date">
                          {moment(child.date).fromNow()}
                        </div>
                      </header>
                      <p className="comment-text">{child.text}</p>
                    </div>
                  )}
                </div>
              )
            })}
      </CommentsStyles>
    </>
  )
}

export default Comments
