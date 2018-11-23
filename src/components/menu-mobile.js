import React from 'react'
import MainMenu from '../components/menu'
import Social from '../components/nav-main-social'
import css from '../less/menu-mobile.module.less'

const MobileMenu = ({
  headerContext
}) => {
  return (
    <div id='menuMobile' className={css.menuMobile}>
      <MainMenu/>
      <Social/>
    </div>
  )
}

export default MobileMenu