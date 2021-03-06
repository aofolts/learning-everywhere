import React, {Component} from 'react';
import {Helmet} from 'react-helmet'
import PropTypes from 'prop-types'
import favicon from '../images/favicon.png'
import Header from './header'
import Footer from './footer'

class Layout extends Component {
  render() {
    const {
      seo
    } = this.props

    const {
      title,
      keywords,
      description
    } = seo

    return (
      <div id='layout'>
        <Helmet>
          <title>{title}</title>
          <meta charSet="UTF-8" />
          <meta name='description' content={description}/>
          <meta name='keywords' content={keywords.join(',')}/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel='shortcut icon' type='image/png' href={favicon}/>
          <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,500" rel="stylesheet"></link>
        </Helmet>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }

}

Layout.propTypes = {
  seo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired, 
    keywords: PropTypes.array.isRequired
  })
}

export default Layout

export function withLayout(Component) {
  return props => {
    const {
      data
    } = props

    const {
      page
    } = data

    const {
      layout: layoutData
    } = page

    const layout = layoutData ? layoutData[0] : null

    const {
      seo
    } = page

    const meta = {
      seo: {
        ...seo,
        description: seo.description.description
      }
    }

    return (
      <Layout {...meta}>
        <Component {...props} {...{page,layout}}/>
      </Layout>
    )
  }
}