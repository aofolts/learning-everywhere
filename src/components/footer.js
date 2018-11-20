import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
import AwardsSection from '../components/section-home-awards'
import css from '../less/footer.module.less'
import FacebookIcon from '../svg/icon-social-facebook'
import TwitterIcon from '../svg/icon-social-twitter'
import LinkedInIcon from '../svg/icon-social-linkedin'

const icons = {
  Facebook: FacebookIcon,
  Twitter: TwitterIcon,
  LinkedIn: LinkedInIcon
}

export default props => (
  <StaticQuery
    query={query}
    render={data => <Footer data={data} {...props}/>}
  />
)

const FooterBar = ({
  social
}) => {
  const socialItems = social.map(({
    id,
    platform,
    url
  }) => {
    const Icon = icons[platform]

    return (
      <a key={id} className={css.socialItem} title={platform} href={url} target='__blank'>
        <Icon className={css.socialIcon}/>
      </a>
    )
  })

  return (
    <section id='footerBar' className={css.bar}>
      <div className={css.barCopyright}>
        ©{new Date().getFullYear()} Learning Everywhere
      </div>
      <div className={css.bar}>
        {socialItems}
      </div>
    </section>
  )
}

const Footer = ({
  data
}) => {
  const awards = data.awards.edges.map(item => item.node)
  const social = data.social.edges.map(item => item.node)

  return (
    <footer id='footer'>
      <AwardsSection awards={awards}/>
      <FooterBar social={social}/>
    </footer>
  )
}

const query = graphql`
  {
    awards: allContentfulAward {
      edges {
        node {
          id
          title
        }
      }
    }
    social: allContentfulSocialAccount(
      filter: {
        platform: {
          in: ["Facebook","Twitter","LinkedIn"]
        }
      }
    ) {
      edges {
        node {
          id
          name
          platform
          handle
          url
        }
      }
    }
  }
`