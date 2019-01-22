import {graphql} from 'gatsby'

export const pageFieldsFragment = graphql`
  fragment pageFields on ContentfulPage {
    id
    title
    slug
    featuredImage {
      ...heroImage
    }
    seo {
      ...seoFields
    }
  }
`

export const socialAccountFragment = graphql`
  fragment socialAccount on ContentfulSocialAccount {
    id
    platform
    url
  }
`

export const seoFragment = graphql`
  fragment seoFields on ContentfulSeo {
    title
    description {
      description
      childMarkdownRemark {
        excerpt(pruneLength: 120)
      }
    }
    keywords   
  }
`