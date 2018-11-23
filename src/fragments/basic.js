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