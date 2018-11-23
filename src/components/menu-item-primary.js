import React,{Fragment} from 'react'
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
    <Fragment>
      <div className={css.subMenuToggle}></div>
      <ul className={css.subMenu}>
        {items}
      </ul>
    </Fragment>
  )
}

const PrimaryMenuItem = ({
  entry
}) => {
  return (
    <li key={entry.id} className={css.item}>
      <Link className={css.title} {...entry}>{entry.title}</Link>
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