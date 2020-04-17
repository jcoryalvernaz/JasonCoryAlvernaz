import Comment from 'components/comment'
import CommentsStyles from 'styles/CommentsStyles'
import PropTypes from 'prop-types'
import React from 'react'

function Comments({ comments, postTitle }) {
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

Comments.defaultProps = {
  comments: [],
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
  postTitle: PropTypes.string.isRequired,
}

export default Comments
