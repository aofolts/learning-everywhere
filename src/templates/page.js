import React,{Fragment} from 'react'
import {graphql} from 'gatsby'
import { withLayout } from '../components/layout'
import Hero from '../components/hero-secondary'
import css from '../less/page.module.less'
import RichText from '../components/rich-text'

const ContentSection = ({
  content
}) => {
  console.log(content)
  return (
    <section id='content'>
      <div className='wrapSmall'>
        <RichText html={content}/>
      </div>
    </section>    
  )
}

const Page = ({
  data,
  layout
}) => {
  const {
    page
  } = data

  return (
    <Fragment>
      <Hero title={page.title}/>
      <ContentSection content={layout.markdown.childMarkdownRemark.html}/>
    </Fragment>    
  )
}

export default withLayout(Page)

export const query = graphql`
  query pageBySlug($slug: String!) {
    page: contentfulPage(slug: {eq: $slug}) {
      ...pageFields
      layout {
        ...pageLayoutFields
      }
    }
  }
`

export const pageLayoutFieldsFragment = graphql`
  fragment pageLayoutFields on ContentfulMarkdown {
    markdown {
      childMarkdownRemark {
        html
      }
    }
  }
`