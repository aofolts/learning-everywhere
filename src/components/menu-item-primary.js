import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import css from '../less/menu-item-primary.module.less'
import {withHeaderContext} from './header'
import SecondaryMenuItem from './menu-item-secondary'
import Link from '../components/link'

const SubMenu = ({
  entries
}) => {
  if (!entries) return null

  const items = entries.map(entry => {
    return <SecondaryMenuItem key={entry.id} entry={entry}/>
  })

  return (
    <ul className={css.subMenu}>
      {items}
    </ul>
  )
}

const Toggle = ({
  entry,
  headerContext
}) => {
  if (!entry.subMenuItems) return null

  const {
    setExpandedMenuItemId
  } = headerContext

  const handleClick = () => {
    if (entry.page || entry.url) {
      setExpandedMenuItemId(entry.id)
    }
  }

  return entry.subMenuItems ? (
    <div className={css.subMenuToggle} onClick={handleClick}/>
  ) : null
}

const PrimaryMenuItem = ({
  entry,
  headerContext
}) => {
  const {
    expandedMenuItemId,
    setExpandedMenuItemId
  } = headerContext

  const handleHeaderClick = () => {
    if (!entry.page && !entry.url) {
      setExpandedMenuItemId(entry.id)
    }
  }

  const itemClasses = [
    css.item,
    expandedMenuItemId === entry.id ? css.itemIsExpanded : null
  ].join(' ')

  return (
    <li key={entry.id} className={itemClasses}>
      <header className={css.header} onClick={handleHeaderClick}>
        <Link className={css.title} {...entry}>{entry.title}</Link>
        <Toggle headerContext={headerContext} entry={entry}/>
      </header>
      <SubMenu entries={entry.subMenuItems}/>
    </li>
  )
}

PrimaryMenuItem.propTypes = {
  entry: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    page: PropTypes.object,
    url: PropTypes.string,
    subMenuItems: PropTypes.array
  })
}

export default withHeaderContext(PrimaryMenuItem)

export const menuItemPageFragment = graphql`
  fragment menuItemPage on ContentfulPage {
    id
    title
    slug
    internal {
      type
    }
  }
`

export const menuItemCourseCategoryFragment = graphql`
  fragment menuItemCourseCategory on ContentfulCourseCategory {
    id
    title
    slug
    internal {
      type
    }
  }
`

export const primaryMenuItemFragment = graphql`
  fragment primaryMenuItem on ContentfulMenuItem {
    ...menuItem
    subMenuItems {
      ...menuItem
    }
  }
`

export const menuItemFragment = graphql`
  fragment menuItem on ContentfulMenuItem {
    id
    title
    url
    page {
      ...menuItemPage
      ...menuItemCourseCategory
    }
  }
`