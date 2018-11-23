import React, {Component} from 'react'
import {StaticQuery,graphql} from 'gatsby'
import css from '../less/header.module.less'
import Nav from '../components/nav'
import {throttle} from 'lodash'

export const HeaderContext = React.createContext()

export function withHeaderContext(Component) {
  return props => (
    <HeaderContext.Consumer>
      {context => <Component {...props} headerContext={context}/>}
    </HeaderContext.Consumer>
  )
}

export default props => (
  <StaticQuery
    query={query}
    render={data => <Header data={data} {...props}/>}
  />
)

class Header extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      expandedMenuItemId: null,
      headerIsDocked: true,
      menuMobileIsOpen: false
    }

    this.throttledCheckDocking = throttle(this.checkDocking,100)
  }

  componentDidMount() {
    window.addEventListener('scroll',this.throttledCheckDocking)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll',this.throttledCheckDocking)
  }

  checkDocking = () => {
    const headerIsDocked = window.pageYOffset === 0 

    if (headerIsDocked !== this.state.headerIsDocked) {
      this.setState({
        headerIsDocked
      })
    }
  }

  setExpandedMenuItemId = id => {
    console.log(id + ' ' + this.state.expandedMenuItemId)

    if (id === this.state.expandedMenuItemId) {
      id = null
    }

    this.setState({
      expandedMenuItemId: id
    })
  }

  toggleMenuMobile = () => {
    this.setState({
      menuMobileIsOpen: !this.state.menuMobileIsOpen
    })
  }

  render() {
    const {
      state,
      props,
      toggleMenuMobile,
      setExpandedMenuItemId
    } = this

    const headerClasses = [
      css.header,
      state.headerIsDocked ? css.headerIsDocked : css.headerIsUndocked
    ].join(' ')

    const {
      socialAccounts
    } = props.data.settings

    const menuItems = props.data.settings.menuItems.map(entry => {
      const subMenuItems = !entry.subMenuItems ? null : entry.subMenuItems.map(entry => {
        return {
          ...entry,
          page: entry.page ? entry.page[0] : null
        }
      })

      return {
        ...entry,
        page: entry.page ? entry.page[0] : null,
        subMenuItems
      }
    })

    const context = {
      ...this.state,
      toggleMenuMobile,
      setExpandedMenuItemId,
      data: {
        menuItems,
        socialAccounts
      }
    }

    return (
      <HeaderContext.Provider value={context}>
        <header id='header' className={headerClasses}>
          <Nav/>
        </header>
      </HeaderContext.Provider>
    )
  }
}

export const query = graphql`
  {
    settings: contentfulSettings(name: {eq: "Settings"}) {
      menuItems {
        ...primaryMenuItem
      }
      socialAccounts {
        ...socialAccount
      }
    }
  }
`