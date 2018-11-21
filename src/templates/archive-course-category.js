import React,{Fragment} from 'react'
import {graphql,Link} from 'gatsby'
import { withLayout } from '../components/layout'
import Hero from '../components/hero-secondary'
import css from '../less/archive-course-category.module.less'
import IntroSection from '../components/course-categories'
import RichText from '../components/rich-text'
import CourseCard from '../components/card-course'

const CoursesSection = ({
  data
}) => {

  const cards = data.courses.map(entry => {
    return <CourseCard key={entry.id} entry={entry}/>
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

const CourseCategoryArchive = ({
  data,
  layout
}) => {
  const {
    page
  } = data

  return (
    <Fragment>
      <Hero title={page.title}/>
      <IntroSection/>
      <CoursesSection data={{courses: page.courses}}/>
    </Fragment>    
  )
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