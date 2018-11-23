import React from 'react'
import { withHeaderContext } from './header'
import PrimaryMenuItem from './menu-item-primary'

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
    <ul id='menuMain'>
      {items}
    </ul>
  )
}

export default withHeaderContext(Menu)

