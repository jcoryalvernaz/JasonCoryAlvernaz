import Comment from 'components/comment'
import CommentsStyles from 'styles/CommentsStyles'
import PropTypes from 'prop-types'
import React from 'react'
import {
  CommentType,
  StringType,
} from 'types'

const defaultProps = {
  comments: [],
}

const propTypes = {
  comments: PropTypes.arrayOf(CommentType),
  postTitle: StringType.isRequired,
}

const Comments = ({
  comments,
  postTitle,
}) => {
  const commentsTitle = commentsLength => {
    if (commentsLength === 1) {
      return `1 Reply for ${postTitle}`
    } else if (commentsLength > 1) {
      return `${commentsLength} Replies for ${postTitle}`
    } else {
      return `No Replies for ${postTitle}`
    }
  }

  return (
    <CommentsStyles>
      <h2 className="comments-count">{commentsTitle(comments.length)}</h2>
      {comments.length > 0 &&
        comments
          .filter(comment => comment.moderated)
          .filter(comment => !comment.parent_comment_id)
          .map(comment => {
            let reply
            if (comment.id) {
              reply = comments.find(c => comment.id === c.parent_comment_id)
            }
            return <Comment comment={comment} key={comment.id} reply={reply} />
          })}
    </CommentsStyles>
  )
}

Comments.propTypes = propTypes
Comments.defaultProps = defaultProps

export default Comments
