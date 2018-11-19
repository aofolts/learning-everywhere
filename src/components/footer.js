import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
import AwardsSection from '../components/section-home-awards'

export default props => (
  <StaticQuery
    query={query}
    render={data => <Footer data={data} {...props}/>}
  />
)

const Footer = ({
  data
}) => {
  const awards = data.awards.edges.map(item => item.node)

  return (
    <footer id='footer'>
      <AwardsSection awards={awards}/>
    </footer>
  )
}

const query = graphql`
  {
    awards: allContentfulAward {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`