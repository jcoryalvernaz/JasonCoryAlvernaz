import { CommentType } from 'types'
import React from 'react'
import moment from 'moment'

const defaultProps = {
  reply: null,
}

const propTypes = {
  comment: CommentType.isRequired,
  reply: CommentType,
}

const Comment = ({
  comment,
  reply,
}) => {
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

Comment.propTypes = propTypes
Comment.defaultProps = defaultProps

export default Comment
