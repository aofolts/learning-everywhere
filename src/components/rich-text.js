import React from 'react'
import css from '../less/rich-text.module.less'

const RichText = ({
  className,
  html
}) => {
  return (
    <div 
      className={[css.content,className].join(' ')} 
      dangerouslySetInnerHTML={{__html: html}}
    ></div>
  )
}

export default RichText