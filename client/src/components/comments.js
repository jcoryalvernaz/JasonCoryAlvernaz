import React from "react"
import moment from "moment"

import SectionStyles from "../styles/SectionStyles"
import FormStyles from "../styles/FormStyles"
import CommentsStyles from "../styles/CommentsStyles"

const Comments = ({ comments, slug, postTitle }) => {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    await fetch("https://jca-comments-api.herokuapp.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
        mutation {
          createComment(name: "${state.name}" text: "${state.text}" slug: "${slug}" parent_comment_id: null)
          {
            name
          }
        }`,
      }),
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => alert(err))
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

  return (
    <>
      <SectionStyles className="comments">
        <h2 className="comments-heading">
          {formTitle(comments.filter(comment => comment.moderated).length)}
        </h2>
        <FormStyles onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="comment-name"
            id="name"
            maxLength="255"
            placeholder="Name"
            onChange={handleChange}
            required
          />
          <textarea
            name="text"
            className="comment-text"
            id="text"
            placeholder="Comment"
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </FormStyles>
      </SectionStyles>
      <CommentsStyles>
        <h2>
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
