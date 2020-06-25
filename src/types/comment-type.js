import BooleanType from './boolean-type'
import NumberType from './number-type'
import PropTypes from 'prop-types'
import StringType from './string-type'

const CommentType = PropTypes.shape({
  id: NumberType,
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
