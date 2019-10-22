import React, { useState } from "react"
import moment from "moment"

import SectionStyles from "../styles/SectionStyles"
import FormStyles from "../styles/FormStyles"
import CommentsStyles from "../styles/CommentsStyles"

const Comments = ({ comments, slug, postTitle }) => {
  const [state, setState] = useState({
    submitting: false,
    newComment: {
      name: "",
      text: "",
    },
    success: false,
    error: false,
  })

  const handleChange = e => {
    const { newComment } = state
    setState({ newComment: { ...newComment, [e.target.name]: e.target.value } })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const { newComment } = state

    setState({ ...state, submitting: true })

    await fetch(process.env.GATSBY_COMMENTS_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
        mutation {
          createComment(name: "${newComment.name}" text: "${newComment.text}" slug: "${slug}" parent_comment_id: null)
          {
            name
          }
        }`,
      }),
    })
      .then(() => {
        setState({
          submitting: false,
          newComment: {
            name: "",
            text: "",
          },
          success: true,
          error: false,
        })
      })
      .catch(() => {
        setState({
          submitting: false,
          newComment: {
            name: "",
            text: "",
          },
          success: false,
          error: true,
        })
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
    if (commentsLength === 0) {
      return `No Replies for ${postTitle}`
    } else if (commentsLength === 1) {
      return `1 Reply for ${postTitle}`
    } else {
      return `${commentsLength} Replies for ${postTitle}`
    }
  }

  const showSuccess = () => {
    return (
      <p className="success">{`Thank you for submitting your comment for review!`}</p>
    )
  }

  const showError = () => {
    return (
      <p className="error">{`Oops! Something went wrong. Please try again.`}</p>
    )
  }

  const {
    submitting,
    newComment: { name, text },
    success,
    error,
  } = state

  return (
    <>
      <SectionStyles className="comments">
        <h2 className="comments-heading">
          {formTitle(comments.filter(comment => comment.moderated).length)}
        </h2>
        <FormStyles
          name="comment"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="comment" />
          <input type="hidden" name="botfield" onChange={handleChange} />
          <input
            type="text"
            name="name"
            className="comment-name"
            id="name"
            placeholder="Name"
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
            onChange={handleChange}
            value={text}
            minLength="20"
            maxLength="1000"
            required
          />
          <button
            type="submit"
            disabled={!name || !text || text.length < 20 || submitting}
          >
            Submit
          </button>
        </FormStyles>
        {/*{success || error ? showSuccess() || showError() : ""}*/}
      </SectionStyles>
      <CommentsStyles>
        <h2 className="comments-count">
          {commentsTitle(comments.filter(comment => comment.moderated).length)}
        </h2>
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
                      {moment(parseInt(comment.date)).fromNow()}
                    </div>
                  </header>
                  <p className="comment-text">{comment.text}</p>
                  {child && child.moderated && (
                    <div className="comment-reply">
                      <header>
                        <h2>{child.name}</h2>
                        <div className="comment-date">
                          {moment(parseInt(child.date)).fromNow()}
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
