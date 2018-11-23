import React from 'react'
import css from '../less/nav.module.less'
import {withHeaderContext} from './header';
import logoSrc from '../images/logo.png'
import MobileMenu from '../components/menu-mobile'
import {Link} from 'gatsby'
import Toggle from '../components/menu-mobile-toggle'

const Brand = ({
  headerIsDocked
}) => {
  const brandClasses = [
    css.brand,
    headerIsDocked ? css.brandheaderIsDocked : css.brandIsUndocked
  ].join(' ')

  return (
    <Link className={brandClasses} to='/'>
      <div className={css.brandName}>Learning Everywhere</div>
      <img src={logoSrc} className={css.brandLogo} alt='logo'/>
    </Link>
  )
}

const Nav = ({
  headerContext
}) => {
  const {
    headerIsDocked
  } = headerContext

  const navClasses = [
    css.nav,
    headerIsDocked ? css.navIsDocked : css.navIsUndocked
  ].join(' ')

  return (
    <nav id='navMain' className={navClasses}>
      <Brand {...{headerIsDocked}}/>
      <MobileMenu/>
      <Toggle/>
    </nav>
  )
}

export default withHeaderContext(Nav)