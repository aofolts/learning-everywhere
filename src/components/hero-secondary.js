import React from 'react'
import css from '../less/hero-secondary.module.less'

const Hero = ({
  title
}) => {
  return (
    <section id='hero' className={css.section}>
      <div className={css.content}> 
        <h1 className={css.title}>{title}</h1>
      </div>
    </section>
  )
}

export default Hero