import React,{Fragment} from 'react'
import {withLayout} from '../components/layout'
import {graphql} from 'gatsby'

const Index = ({
  page,
  layout
}) => {
  return (
    <Fragment>
      <h1>home</h1>
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