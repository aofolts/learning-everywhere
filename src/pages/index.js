import React,{Fragment} from 'react'
import {withLayout} from '../components/layout'
import {graphql} from 'gatsby'
import Hero from '../components/hero-home'

const Index = ({
  page,
  layout
}) => {
  const {
    featuredImage,
  } = page

  const {
    heroHeadline
  } = layout

  return (
    <Fragment>
      <Hero headline={heroHeadline} image={featuredImage}/>
    </Fragment>
  )
}

export default withLayout(Index)

export const query = graphql`
  {
    page: contentfulPage(slug: {eq: "home"}) {
      ...pageFields
      layout {
        heroHeadline
        introCards {
          id
          headline
          details {
            details
          }
          image {
            ...cardImage
          }        
        }
        servicesHeadline
        serviceCards {
          id
          title
          details
          icon
        }
      }
    }
  }
`