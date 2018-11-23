import React from 'react'
import MainMenu from './menu-main'
import Social from '../components/nav-main-social'
import css from '../less/menu-mobile.module.less'

const Header = ({
  headerContext
}) => {
  return (
    <div id='menuMobileHeader' className={css.header}>
      <div id='menuMobileToggle' className={css.toggle}>
        <div className={css.toggleTopBar}/>
        <div className={css.toggleMiddleBar}/>
        <div className={css.toggleBottomBar}/>
      </div>
    </div>
  )
}

const MobileMenu = ({
  headerContext
}) => {
  return (
    <div id='menuMobile' className={css.menuMobile}>
      <Header headerContext={headerContext}/>
      <MainMenu/>
      <Social/>
    </div>
  )
}

export default MobileMenu