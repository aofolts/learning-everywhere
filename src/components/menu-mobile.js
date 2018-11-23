import React from 'react'
import MainMenu from './menu-main'
import Social from '../components/nav-main-social'
import css from '../less/menu-mobile.module.less'
import { withHeaderContext } from './header'
import Toggle from '../components/menu-mobile-toggle'

const Header = ({
  headerContext
}) => {
  return (
    <div id='menuMobileHeader' className={css.header}>
      <Toggle {...{headerContext}}/>
    </div>
  )
}

const MobileMenu = ({
  headerContext
}) => {
  const {
    menuMobileIsOpen
  } = headerContext

  const menuMobileClasses = [
    css.menuMobile,
    menuMobileIsOpen ? css.menuMobileIsOpen : css.menuMobileIsClosed
  ].join(' ')

  return (
    <div id='menuMobile' className={menuMobileClasses}>
      <Header headerContext={headerContext}/>
      <MainMenu/>
      <Social/>
    </div>
  )
}

export default withHeaderContext(MobileMenu)