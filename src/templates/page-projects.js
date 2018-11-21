import React,{Fragment,Component} from 'react'
import {graphql} from 'gatsby'
import {withLayout} from '../components/layout'
import Hero from '../components/hero-secondary'
import css from '../less/page-projects.module.less'
import ProjectCard from '../components/card-project'

const NavSection = ({
  yearRanges,
  setYearRange,
  state
}) => {
  const items = yearRanges.map(range => {
    const min = range[0]
    const max = range.length > 1 ? range[range.length - 1] : null

    const classes = [
      css.navItem,
      state.yearRange === range ? css.navItemActive : null
    ].join(' ')

    const handleClick = () => setYearRange(range)

    return (
      <li key={min + max} className={classes} onClick={handleClick}>
        {min}
        {max ? ` - ${max}` : null}
      </li>
    )
  })

  return (
    <section id='projectsNav' className={css.coursesSection}>
      <div className='wrapSmall'>
        <h2>Projects By Year</h2>
        <ul className={css.navItems}>
          {items}
        </ul>
      </div>
    </section>    
  )
}

const ProjectsSection = ({
  data,
  state,
  setExpandedProjectId
}) => {
  const projects = data.projects.map(entry => {
    return (
      <ProjectCard 
        key={entry.id} 
        entry={entry} 
        state={state}
        setExpandedProjectId={setExpandedProjectId}
        />
    )
  })

  return (
    <section id='projects' className={css.sectionProjects}>
      <div className='wrapMedium'>
        {projects}
      </div>
    </section>
  )
}

const chunkArray = (arr,chunkSize) => {
  const chunkedArray = []

  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i,i + chunkSize)

    chunkedArray.push(chunk)
  }

  return chunkedArray
}

class ProjectsArchive extends Component {
  constructor(props) {
    super(props)
    
    const {
      data
    } = props

    const projects = this.projects = data.projects.edges.map(entry => entry.node)

    const allEndYears = projects.filter((entry,index) => {
      return entry.endDate != null
    })
    .map(entry => {
      return entry.endDate.slice(0,4)
    })
    
    allEndYears.unshift(new Date().getFullYear() + 1)

    const endYears = allEndYears.filter((year,index) => {
      return index <= allEndYears.indexOf(year)
    })

    const yearRanges = this.yearRanges = chunkArray(endYears,5)

    this.state = {
      yearRange: yearRanges[0],
      expandedProjectId: projects[0].id
    }
  }

  setExpandedProjectId = id => {
    this.setState({
      expandedProjectId: id
    })
  }

  setYearRange = yearRange => {
    this.setState({
      yearRange
    })
  }

  render() {
    const {
      state,
      props,
      yearRanges,
      setYearRange,
      setExpandedProjectId,
      projects
    } = this

    const {
      data
    } = props
  
    return (
      <Fragment>
        <Hero title={data.page.title}/>
        <NavSection state={state} {...{yearRanges,setYearRange}}/>
        <ProjectsSection 
          data={{projects}} 
          state={state} 
          setExpandedProjectId={setExpandedProjectId}
          />
      </Fragment>    
    )
  }
}

export default withLayout(ProjectsArchive)

export const query = graphql`
  {
    page: contentfulPage(slug: {eq: "projects"}) {
      ...pageFields
    }
    projects: allContentfulProject(
      sort: {
        fields: [endDate,startDate,client],
        order: DESC
      }
    ) {
      edges {
        node {
          ...cardProject
        }
      }
    }
  }
`