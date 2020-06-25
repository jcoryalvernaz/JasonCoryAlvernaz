import { CommentType } from 'types'
import React from 'react'
import { formatDistanceToNow } from 'date-fns'

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
      <div className="comment-date">{formatDistanceToNow(comment.date), { addSuffix: true }}</div>
    </header>
    <p className="comment-text">{comment.text}</p>
    {reply && reply.moderated && (
      <div className="comment-reply">
        <header>
          <h2>{reply.name}</h2>
          <div className="comment-date">{formatDistanceToNow(reply.date), { addSuffix: true }}</div>
        </header>
        <p className="comment-text">{reply.text}</p>
      </div>
    )}
  </div>
}

Comment.propTypes = propTypes
Comment.defaultProps = defaultProps

export default Comment
