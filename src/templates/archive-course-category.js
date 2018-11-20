import React,{Fragment} from 'react'
import {graphql,Link} from 'gatsby'
import { withLayout } from '../components/layout'
import Hero from '../components/hero-secondary'
import css from '../less/archive-course-category.module.less'
import IntroSection from '../components/course-categories'
import RichText from '../components/rich-text'

const ContentSection = ({
  content
}) => {
  return (
    <section id='content' className={css.coursesSection}>
      <div className='wrapSmall'>
        <h1>hey</h1>
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

  const categories = data.categories.edges.map(entry => entry.node)
  const description = page.description.description

  return (
    <Fragment>
      <Hero title={page.title}/>
      <IntroSection/>
      <ContentSection/>
    </Fragment>    
  )
}

export default withLayout(CourseCategoryArchive)

export const query = graphql`
  query courseCategoryBySlug($slug: String!) {
    page: contentfulCourseCategory(slug: {eq: $slug}) {
      ...courseCategoryFields
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