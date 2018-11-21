import React,{Fragment} from 'react'
import {graphql,Link} from 'gatsby'
import { withLayout } from '../components/layout'
import Hero from '../components/hero-secondary'
import css from '../less/archive-course-category.module.less'
import CourseCard from '../components/card-course'

// const ProjectsSection = ({
//   data
// }) => {

//   const cards = data.courses.map(entry => {
//     return <CourseCard key={entry.id} entry={entry}/>
//   })

//   return (
//     <section id='content' className={css.coursesSection}>
//       <div className='wrapMedium'>
//         <div className={css.courses}>
//           {cards}
//         </div>
//       </div>
//     </section>    
//   )
// }

const CourseCategoryArchive = ({
  data,
  layout
}) => {
  const {
    page,
    projects
  } = data

  console.log(projects)

  return (
    <Fragment>
      <Hero title={page.title}/>
    </Fragment>    
  )
}

export default withLayout(CourseCategoryArchive)

export const query = graphql`
  {
    page: contentfulPage(slug: {eq: "projects"}) {
      ...pageFields
    }
    projects: allContentfulProject {
      edges {
        node {
          id
          client
          subject
          startDate
          endDate
          description {
            description
          }
        }
      }
    }
  }
`