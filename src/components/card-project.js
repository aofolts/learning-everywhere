import {graphql} from 'gatsby'
import React from 'react'
import css from '../less/card-project.module.less'
import RichText from '../components/rich-text'

const Card = ({
  entry,
  setExpandedProjectId,
  state
}) => {
  const {
    client
  } = entry

  const description = entry.description.description

  const nextYear = new Date().getFullYear() + 1

  const isExpanded = entry.id === state.expandedProjectId

  const Details = () => {
    const detailsClasses = [
      css.details,
      isExpanded ? null : css.detailsAreHidden
    ].join(' ')

    const dateRange = (() => {
      const {
        startMonth,
        startYear,
        endMonth,
        endYear
      } = entry

      const end = endYear ? `${endMonth} ${endYear}` : 'Present'

      return `${startMonth} ${startYear} - ${end}`
    })()

    return (
      <div className={detailsClasses}>
        <div className={css.dateRange}>{dateRange}</div>
        <RichText html={description} className={css.description}/>
      </div>
    )
  }

  const handleClick = () => {
    if (entry.id === state.expandedProjectId) {
      setExpandedProjectId(null)
    }
    else {
      setExpandedProjectId(entry.id)
    }
  }

  const isVisible = 
    state.yearRange.includes(entry.endYear) ||
    (state.yearRange.includes(nextYear) && entry.endYear === 'null')

    console.log(state.yearRange)
    console.log(entry.endYear)
    console.log(state.yearRange.includes(entry.endYear))
    console.log(isVisible)

  const cardClasses = [
    css.card,
    isVisible ? null : css.cardIsHidden
  ].join(' ')

  return (
    <div className={cardClasses}>
      <div className={css.header} onClick={handleClick}>
        <h3 className={css.title}>{client}</h3>
        <div className={css.toggle}>
          <div className={css.toggleSymbol}>
            {isExpanded ? '-' : '+'}
          </div>
        </div>
      </div>
      <Details/>
    </div>
  )
}

export default Card

export const cardProjectFragment = graphql`
  fragment cardProject on ContentfulProject {
    id
    client
    subject
    startDate
    startMonth: startDate(formatString: "MMMM")
    startYear: startDate(formatString: "Y")
    endMonth: endDate(formatString: "MMMM")
    endYear: endDate(formatString: "Y")
    endDate
    description {
      description
    }
  }
`