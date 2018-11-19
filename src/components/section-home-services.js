import {graphql} from 'gatsby'
import React from 'react'
import css from '../less/section-home-services.module.less'
import RaiseHandIcon from '../svg/icon-raised-hand'
import GlobeIcon from '../svg/icon-globe'
import DiscussIcon from '../svg/icon-discuss'

const icons = {
  'raised-hand': RaiseHandIcon,
  'globe': GlobeIcon,
  'discussion': DiscussIcon
}

const ServicesSection = ({
  headline,
  cards: items
}) => {
  const cards = items.map(({
    id,
    title,
    details,
    icon
  }) => {
    const Icon = icons[icon]

    return (
      <div key={id} className={css.card}>
        <Icon className={css.cardIcon}/>
        <h3 className={css.carTitle}>{title}</h3>
        <p className={css.cardDetails}>{details}</p>
      </div>
    )
  })

  return (
    <section id='services' className={css.section}>
      <div className='wrapMain'>
        <h2 className={css.headline}>{headline}</h2>
        <div className={css.cards}>
          {cards}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

export const homeServicesFragment = graphql`
  fragment homeServices on ContentfulLayoutPageHome {
    servicesHeadline
    serviceCards {
      id
      title
      details
      icon
    }
  }
`