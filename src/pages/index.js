import React,{Fragment} from 'react'
import {withLayout} from '../components/layout'
import {graphql} from 'gatsby'
import Hero from '../components/hero-home'
import BackgroundImage from '../components/image-background'
import css from '../less/home.module.less'
import ServicesSection from '../components/section-home-services'

const IntroSection = ({
  cards
}) => {
  const cardEls = cards.map(({
    id,
    headline,
    details,
    image
  }) => {
    return (
      <div key={id} className={css.introCard}>
        <div className={css.introCardMedia}>
          <BackgroundImage className='mediaBackground' {...image}/>
        </div>
        <h3>{headline}</h3>
        <p className={css.introCardDetails}>{details.details}</p>
      </div>
    )
  })

  return (
    <section className={css.introSection}>
      <div className={[css.introWrap,'wrapMedium'].join(' ')}>
        <div className={css.introCards}>
          {cardEls}
        </div>
      </div>
    </section>
  )
}

const Index = ({
  page,
  layout
}) => {
  const {
    featuredImage,
  } = page

  const {
    heroHeadline,
    introCards,
    servicesHeadline,
    serviceCards
  } = layout

  return (
    <Fragment>
      <Hero headline={heroHeadline} image={featuredImage}/>
      <IntroSection cards={introCards}/>
      <ServicesSection headline={servicesHeadline} cards={serviceCards}/>
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
        ...homeServices   
      }
    }
  }
`