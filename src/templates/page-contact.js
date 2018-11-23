import React,{Fragment} from 'react'
import {graphql} from 'gatsby'
import { withLayout } from '../components/layout'
import Hero from '../components/hero-secondary'
import css from '../less/page-contact.module.less'
import Form from '../components/form-contact'

const ContentSection = ({
  location
}) => {
  return (
    <section id='content'>
      <div className='wrapMain'>
        <div className={css.grid}>
          <div className={css.info}>
            <h2>Get in Touch</h2>
            <p>
              Phone: {location.phone}<br/>
              Fax: {location.fax}<br/>
              Email: {location.email}
            </p>
            <p>
              {location.street}<br/>
              {location.city}, {location.state} {location.zipCode}
            </p>
          </div>
          <Form/>
        </div>
      </div>
    </section>    
  )
}

const Page = ({
  data,
  layout
}) => {
  const {
    location,
    page
  } = data

  return (
    <Fragment>
      <Hero title={page.title}/>
      <ContentSection location={location}/>
    </Fragment>    
  )
}

export default withLayout(Page)

export const query = graphql`
  {
    page: contentfulPage(slug: {eq: "contact"}) {
      ...pageFields
      layout {
        ...pageLayoutFields
      }
    }
    location: contentfulLocation(name: {eq: "Learning Everywhere"}) {
      phone
      fax
      email
      street
      city
      state
      zipCode
    }
  }
`