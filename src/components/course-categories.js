import React from 'react'
import {Link,graphql,StaticQuery} from 'gatsby'
import css from '../less/archive-course-category.module.less'

export default props => (
  <StaticQuery
    query={query}
    render={data => <IntroSection data={data} {...props}/>}
  />
)

const IntroSection = ({data}) => {
  const categories = data.categories.edges.map(entry => entry.node)

  const listItems = categories.map(({
    id,
    title,
    slug
  }) => {
    return (
      <li key={id} className={css.courseCategory}>
        <Link to={`/courses/${slug}`}>{title}</Link>
      </li>
    )
  })

  const Categories = ({categories}) => {
    return (
      <ul className={css.courseCategories}>
        {listItems}
      </ul>
    )
  }

  return (
    <section id='intro'>
      <div className='wrapSmall'>
        <h2>Courses Overview</h2>
        <p className={css.categoryDescription}>{data.coursesInfo.overview.overview}</p>
        <h3>Navigate to...</h3>
        <Categories categories={data.categories}/>
      </div>
    </section>
  )
}

const query = graphql`
  {
    coursesInfo: contentfulLayoutPageCourses(name: {eq: "Courses"}) {
      overview {
        overview
      }
    }
    categories: allContentfulCourseCategory(
      sort: {
        fields: [title],
        order: ASC
      }
    ) {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`

