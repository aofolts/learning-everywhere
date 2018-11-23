import React from 'react'
import css from '../less/menu-mobile.module.less'
import { withHeaderContext } from './header'

const Toggle = ({
  headerContext
}) => {
  const {
    menuMobileIsOpen,
    toggleMenuMobile
  } = headerContext

  const toggleClasses = [
    css.toggle,
    menuMobileIsOpen ? css.toggleIsOpen : null
  ].join(' ')

  return (
    <div className={toggleClasses} onClick={toggleMenuMobile}>
      <div className={css.toggleBarTop}/>
      <div className={css.toggleBarMiddle}/>
      <div className={css.toggleBarBottom}/>
    </div>
  )
}

export default withHeaderContext(Toggle)