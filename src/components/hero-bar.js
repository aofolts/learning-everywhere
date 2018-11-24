import React,{Component} from "react"
import {StaticQuery,graphql} from "gatsby"
import css from '../less/hero-bar.module.less'
import {Helmet} from 'react-helmet'

const Translate = () => {
  return (
    <li className={[css.item,css.gtContainer].join(' ')}>
      <span className={css.gtText}>Select Language</span>
      <div id="google_translate_element" className={css.gtElement}/>
    </li>
  )
}

class HeroBar extends Component {

  render() {
    const {
      data
    } = this.props

    const {
      location
    } = data
  
    const {
      phone,
      fax
    } = location
  
    return (
      <div className={css.bar}>
        <Helmet>
          <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
        </Helmet>
        <ul className={css.items}>
          <li key={phone} className={css.item}>
            Phone: {phone}
          </li>
          <li key={fax} className={css.item}>
            Fax: {fax}
          </li>
          <Translate key='translate'/>
        </ul>
      </div>
    )
  }
}

export default props => (
  <StaticQuery
    query={query}
    render={data => <HeroBar data={data} {...props} />}
  />
)

const query = graphql`
  {
    location: contentfulLocation(name: {eq: "Learning Everywhere"}) {
      phone
      fax
    }
  }
`