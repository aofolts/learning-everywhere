import React from 'react'
import {withHeaderContext} from '../components/header'
import css from '../less/nav-main-social.module.less'
import FacebookIcon from '../svg/icon-social-facebook'
import TwitterIcon from '../svg/icon-social-twitter'
import LinkedInIcon from '../svg/icon-social-linkedin'

const icons = {
  Facebook: FacebookIcon,
  Twitter: TwitterIcon,
  LinkedIn: LinkedInIcon
}

const Social = ({
  headerContext
}) => {
  const {
    data
  } = headerContext

  const socialItems = data.socialAccounts.map(({
    id,
    platform,
    url
  }) => {
    const Icon = icons[platform]

    return (
      <a key={id} className={css.item} title={platform} href={url} target='__blank'>
        <Icon className={css.icon}/>
      </a>
    )
  })

  return (
    <div className={css.social}>
      {socialItems}
    </div>
  )
}

export default withHeaderContext(Social)