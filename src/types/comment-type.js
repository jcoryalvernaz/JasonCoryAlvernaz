import BooleanType from './boolean-type'
import PropTypes from 'prop-types'
import StringType from './string-type'

const CommentType = PropTypes.shape({
  id: StringType,
  name: StringType,
  date: StringType,
  text: StringType,
  parent_comment_id: StringType,
  slug: StringType,
  moderated: BooleanType,
})

export {
  CommentType,
}
export default CommentType
