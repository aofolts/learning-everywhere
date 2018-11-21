import React,{Component} from 'react'
import Mountains from '../svg/background-mountains'
import css from '../less/section-home-awards.module.less'

class Awards extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      activeAwardId: props.awards[0].id
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.advance() 
    },2500)
  }

  componentWillUnmount () {
    clearInterval(this.advance)
  }

  advance = () => {
    const currentId = this.state.activeAwardId
    const awards = this.props.awards
    const currentAwardIndex = awards.findIndex(item => item.id === currentId)
    const nextAward = awards[currentAwardIndex + 1] 
    const activeAwardId = nextAward ? nextAward.id : awards[0].id

    this.setState({
      activeAwardId
    })
  }

  render() {
    const {
      awards
    } = this.props

    const {
      activeAwardId
    } = this.state

    const cards = awards.map(({
      title,
      id
    }) => {
      const classes = [
        css.award,
        id === activeAwardId ? css.activeAward : null
      ].join(' ')

      return (
        <div key={id} className={classes}>
          <h2 className={css.title}>{title}</h2>
        </div>
      )
    })
    return (
      <section id='awards' className={css.section}>
        <Mountains className={css.background}/>
        <div className={css.awards}>
          <h4 className={css.subTitle}>Featured Awards</h4>
          {cards}
        </div>
      </section>
    )
  }
}

export default Awards