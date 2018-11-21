import React, {Component} from 'react'
import css from '../less/header.module.less'
import Nav from '../components/nav'

export const HeaderContext = React.createContext()

export function withHeaderContext(Component) {
  return props => (
    <HeaderContext.Consumer>
      {context => <Component {...props} headerContext={context}/>}
    </HeaderContext.Consumer>
  )
}

class Header extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isDocked: true
    }  
  }

  componentDidMount() {
    window.addEventListener('scroll',this.checkDocking)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll',this.checkDocking)
  }

  checkDocking = () => {
    const isDocked = window.pageYOffset > 0 

    if (isDocked !== this.state.isDocked) {
      this.setState({
        isDocked
      })
    }
  }

  render() {
    const {
      state,
      context
    } = this

    const headerClasses = [
      css.header,
      state.isDocked ? css.headerIsDocked : css.headerIsUndocked
    ].join(' ')

    return (
      <HeaderContext.Provider value={{...this.state}}>
        <header id='header' className={headerClasses}>
          <Nav/>
        </header>
      </HeaderContext.Provider>
    )
  }
}
export default Header