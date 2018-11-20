import React,{Fragment} from 'react'
import css from '../less/hero-secondary.module.less'
import Map from '../svg/world-map'
import Bar from './hero-bar'

const Hero = ({
  title
}) => {
  return (
    <Fragment>
      <section id='hero' className={css.section}>
        <Map className={css.map}/>
        <div className={css.content}> 
          <h1 className={css.title}>{title}</h1>
        </div>
      </section>
      <Bar/>
    </Fragment>
  )
}

export default Hero