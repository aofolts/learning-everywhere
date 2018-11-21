import {graphql} from 'gatsby'
import React from 'react'
import css from '../less/card-course.module.less'
import RichText from '../components/rich-text'

const CourseCard = ({
  state,
  setExpandedCardId,
  entry
}) => {
  const description = entry.description.childMarkdownRemark.html
  
  const isExpanded = entry.id === state.expandedCardId

  const Details = () => {
    const classes = [
      css.details,
      isExpanded ? null : css.detailsAreHidden
    ].join(' ')

    return (
      <div className={classes}>
        <RichText html={description} className={css.description}/>
      </div>
    )
  }

  const handleClick = () => {
    if (entry.id === state.expandedCardId) {
      setExpandedCardId(null)
    }
    else {
      setExpandedCardId(entry.id)
    }
  }

  return (
    <div className={css.card}>
      <div className={css.header} onClick={handleClick}>
        <h3 className={css.title}>{entry.title}</h3>
        <div className={css.toggle}>
          {isExpanded ? '-' : '+'}
        </div>
      </div>
      <Details/>
    </div>
  )
}

export default CourseCard

export const cardCourseFragment = graphql`
  fragment cardCourse on ContentfulCourse {
    id
    title
    description {
      childMarkdownRemark {
        html
      }
    }
  }
`