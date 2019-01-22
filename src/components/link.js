import React from 'react'
import {Link as GatsbyLink} from 'gatsby'
import PropTypes from 'prop-types'

export const getFullSlug = (type,slug) => {
  let base = ''

  switch (type) {
    case 'ContentfulCourseCategory': base = 'courses'; break;
    default: base = '';
  }

  return `${base}/${slug}`
}

const Link = ({
  page,
  url,
  className,
  children
}) => {
  if (page) {
    const type = page.internal.type
    const slug = getFullSlug(type,page.slug)

    return (
      <GatsbyLink 
        className={className}
        to={`/${slug}`}
      >
        {children}
      </GatsbyLink>
    )
  }
  else if (url) {
    if (url[0] === '/') {
      return (
        <GatsbyLink 
          className={className}
          to={url}
        >
          {children}
        </GatsbyLink>
      )
    }
    else {
      return (
        <a 
          className={className}
          href={url}
          target='__black'
        >
          {children}
        </a>
      )
    }
  }
  else {
    return <div {...{className}}>{children}</div>
  }
}

Link.propTypes = {
  url: PropTypes.string
}

export default Link