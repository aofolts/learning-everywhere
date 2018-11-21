import React,{Fragment,Component} from 'react'
import {graphql} from 'gatsby'
import { withLayout } from '../components/layout'
import Hero from '../components/hero-secondary'
import css from '../less/archive-course-category.module.less'
import IntroSection from '../components/course-categories'
import CourseCard from '../components/card-course'

const CoursesSection = ({
  data,
  state,
  setExpandedCardId
}) => {

  const cards = data.courses.map(entry => {
    return (
      <CourseCard 
        key={entry.id} 
        entry={entry}
        {...{setExpandedCardId,state}}
        />
    )
  })

  return (
    <section id='content' className={css.coursesSection}>
      <div className='wrapMedium'>
        <div className={css.courses}>
          {cards}
        </div>
      </div>
    </section>    
  )
}

class CourseCategoryArchive extends Component {
  constructor(props) {
    super(props)

    const {
      page
    } = props

    const courses = this.courses = page.courses

    this.state = {
      expandedCardId: courses[0].id
    }
  }

  setExpandedCardId = id => {
    this.setState({
      expandedCardId: id
    })
  }

  render() {
    const {
      courses, 
      setExpandedCardId,
      state,
      props
    } = this

    const {
      page
    } = props

    return (
      <Fragment>
        <Hero title={page.title}/>
        <IntroSection/>
        <CoursesSection data={{courses}} {...{state,setExpandedCardId}}/>
      </Fragment>    
    )
  }
}

export default withLayout(CourseCategoryArchive)

export const query = graphql`
  query courseCategoryBySlug($slug: String!) {
    page: contentfulCourseCategory(slug: {eq: $slug}) {
      ...courseCategoryFields
      courses {
        ...cardCourse
      }
    }
  }
`

export const courseCategoryFieldsFragment = graphql`
  fragment courseCategoryFields on ContentfulCourseCategory {
    id
    title
    description {
      description
    }
    slug
    seo {
      ...seoFields
    }
  }
`