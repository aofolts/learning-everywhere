import React from 'react'
import css from '../less/menu-item-secondary.module.less'
import PropTypes from 'prop-types'
import Link from '../components/link'

const SecondaryMenuItem = ({
  entry
}) => {
  return (
    <li key={entry.id} className={css.item}>
      <Link className={css.title} {...entry}>{entry.title}</Link>
    </li>
  )
}

SecondaryMenuItem.propTypes = {
  entry: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    page: PropTypes.object,
    url: PropTypes.string
  })
}

export default SecondaryMenuItem