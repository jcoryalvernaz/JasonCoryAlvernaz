import BooleanType from './boolean-type'
import ObjectType from './object-type'
import PropTypes from 'prop-types'
import StringType from './string-type'

const PostType = PropTypes.shape({
  id: StringType,
  fields: PropTypes.shape({
    slug: StringType,
  }),
  frontmatter: PropTypes.shape({
    date: StringType,
    description: StringType,
    featuredAlt: StringType,
    featuredImage: ObjectType,
    published: BooleanType,
    tags: PropTypes.arrayOf(StringType),
    title: StringType,
  }),
})

export {
  PostType,
}
export default PostType
