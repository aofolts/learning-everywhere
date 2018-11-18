import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'

const BackgroundImage = ({
  title,
  alt,
  className,
  fluid,
  fixed
}) => {
  return (
    <Image 
      {...{title,alt,fluid,fixed}}
      className={['mediaBackground',className].join(' ')}
      style={{position: 'absolute'}}
    />
  )
}

BackgroundImage.propTypes = {
  title: PropTypes.string,
  alt: PropTypes.string.isRequired
}

export default BackgroundImage