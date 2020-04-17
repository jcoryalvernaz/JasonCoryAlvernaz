/* eslint-disable */
import PropTypes from 'prop-types'
import React from 'react'
import moment from 'moment'

function Comment({ comment, reply }) {
  return <div className="comment">
    <header>
      <h2>{comment.name}</h2>
      <div className="comment-date">{moment(comment.date).fromNow()}</div>
    </header>
    <p className="comment-text">{comment.text}</p>
    {reply && reply.moderated && (
      <div className="comment-reply">
        <header>
          <h2>{reply.name}</h2>
          <div className="comment-date">{moment(reply.date).fromNow()}</div>
        </header>
        <p className="comment-text">{reply.text}</p>
      </div>
    )}
  </div>
}

Comment.defaultProps = {
  reply: null,
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  reply: PropTypes.object,
}

export default Comment
