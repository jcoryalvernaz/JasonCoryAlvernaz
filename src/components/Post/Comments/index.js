import Form from './Form'
import List from './List'
import PropTypes from 'prop-types'
import { SectionStyles } from 'styles'
import {
  CommentType,
  StringType,
} from 'types'
import React, {
  Fragment,
} from 'react'

const propTypes = {
  moderatedComments: PropTypes.arrayOf(CommentType).isRequired,
  slug: StringType.isRequired,
  title: StringType.isRequired,
}

const Comments = ({
  moderatedComments,
  slug,
  title,
}) => {
  return (
    <Fragment>
      <SectionStyles className="comments">
        <Form
          count={moderatedComments.length}
          slug={slug}
        />
      </SectionStyles>
      <List
        comments={moderatedComments}
        postTitle={title}
      />
    </Fragment>
  )
}

Comments.propTypes = propTypes

export default Comments
