import React, {Fragment} from 'react'
import css from '../less/hero-home.module.less'
import BackgroundImage from './image-background'
import Button from '../components/button'
import HeroBar from '../components/hero-bar'

const HomeHero = ({
  headline,
  image
}) => {
  return (
    <Fragment>
      <section id='hero' className={css.section}>
        <BackgroundImage className={[css.background,'mediaBackground'].join(' ')} {...image}/>
        <div className={css.content}>
          <h1 className={css.headline}>{headline}</h1>
          <Button className={css.button} label='Learn More' anchor='#intro' type='secondaryLight'/>
        </div>
      </section>
      <HeroBar/>
    </Fragment>
  )
}

export default HomeHero