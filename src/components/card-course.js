import {graphql} from 'gatsby'
import React, {Component} from 'react'
import css from '../less/card-accordian.module.less'
import RichText from '../components/rich-text'

class Card extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      isExpanded: false
    }
  }

  toggleExpanded = () => {
    this.setState({
      isExpanded: !this.state.isExpanded
    })
  }
  
  render() {
    const {
      entry
    } = this.props

    const {
      title
    } = entry

    const description = entry.description.childMarkdownRemark.html

    const {
      isExpanded
    } = this.state

    const Description = () => {
      const classes = [
        css.description,
        isExpanded ? null : css.descriptionHidden
      ].join(' ')

      console.log(css.descriptionHidden)

      return (
        <RichText html={description} className={classes}/>
      )
    }

    return (
      <div className={css.card}>
        <div className={css.header}>
          <h3 className={css.title}>{title}</h3>
          <div className={css.toggle} onClick={this.toggleExpanded}>
            {isExpanded ? '-' : '+'}
          </div>
        </div>
        <Description/>
      </div>
    )
  }
}

export default Card

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