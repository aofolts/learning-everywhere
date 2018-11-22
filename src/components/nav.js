import React from 'react'
import css from '../less/nav.module.less'
import {withHeaderContext} from './header';
import logoSrc from '../images/logo.png'

const Brand = ({
  isDocked
}) => {
  const brandClasses = [
    css.brand,
    isDocked ? css.brandIsDocked : css.brandIsUndocked
  ].join(' ')

  return (
    <div className={brandClasses}>
      <div className={css.brandName}>Learning Everywhere</div>
      <img src={logoSrc} className={css.brandLogo} alt='logo'/>
    </div>
  )
}

const Nav = ({
  headerContext
}) => {
  const {
    isDocked
  } = headerContext

  const navClasses = [
    css.nav,
    isDocked ? css.navIsDocked : css.navIsUndocked
  ].join(' ')

  return (
    <nav id='navMain' className={navClasses}>
      <Brand {...{isDocked}}/>
    </nav>
  )
}

export default withHeaderContext(Nav)