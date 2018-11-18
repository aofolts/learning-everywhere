import React from 'react'
import css from '../less/buttons.module.less'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'

const buttonTypeClasses = {
  primary: css.buttonPrimary,
  primaryLight: css.buttonPrimaryLight,
  secondaryLight: css.buttonSecondaryLight
}

const Button = ({
  label,
  anchor,
  type,
  page,
  url
}) => {
  const buttonClass = [
    buttonTypeClasses[type]
  ].join(' ')

  if (page) {
    return (
      <Link className={buttonClass} to={page}>
        {label}
      </Link>
    )
  }
  else if (url) {
    return (
      <a className={buttonClass} href={url} target='__blank'>
        {label}
      </a>
    )
  }

  return (
    <div className={buttonClass}>{label}</div>
  )
}

export default Button

Button.defaultProps = {
  type: 'primary'
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary','primaryLight','secondaryLight'])
}