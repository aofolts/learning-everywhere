import React from 'react'
import css from '../less/nav.module.less'
import {withHeaderContext} from './header';
import logoSrc from '../images/logo.png'
import MobileMenu from '../components/menu-mobile'
import {Link} from 'gatsby'

const Brand = ({
  isDocked
}) => {
  const brandClasses = [
    css.brand,
    isDocked ? css.brandIsDocked : css.brandIsUndocked
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
    isDocked
  } = headerContext

  const navClasses = [
    css.nav,
    isDocked ? css.navIsDocked : css.navIsUndocked
  ].join(' ')

  return (
    <nav id='navMain' className={navClasses}>
      <Brand {...{isDocked}}/>
      <MobileMenu/>
    </nav>
  )
}

export default withHeaderContext(Nav)