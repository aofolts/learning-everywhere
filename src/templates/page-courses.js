import React,{Fragment} from 'react'
import {graphql} from 'gatsby'
import { withLayout } from '../components/layout'
import Hero from '../components/hero-secondary'
import IntroSection from '../components/course-categories'

const Page = ({
  data
}) => {
  const {
    page
  } = data

  return (
    <Fragment>
      <Hero title={page.title}/>
      <IntroSection/>
    </Fragment>    
  )
}

export default withLayout(Page)

export const query = graphql`
  {
    page: contentfulPage(slug: {eq: "courses"}) {
      ...pageFields
    }
  }
`