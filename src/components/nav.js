import React from 'react'
import css from '../less/nav.module.less'
import { withHeaderContext } from './header';

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

  console.log(isDocked)

  return (
    <nav id='nav' className={navClasses}>
    </nav>
  )
}

export default withHeaderContext(Nav)