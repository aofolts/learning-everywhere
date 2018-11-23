import React from 'react'
import { withHeaderContext } from './header'
import PrimaryMenuItem from './menu-item-primary'
import css from '../less/menu-main.module.less'

const Menu = ({
  headerContext
}) => {
  const {
    data
  } = headerContext

  const items = data.menuItems.map(entry => {
    return <PrimaryMenuItem key={entry.id} entry={entry}/>
  })

  return (
    <ul id='menuMain' className={css.menu}>
      {items}
    </ul>
  )
}

export default withHeaderContext(Menu)

