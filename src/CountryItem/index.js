import {Component} from 'react'
import './index.css'

class CountryItem extends Component {
  sendId = () => {
    const {id, getId} = this.props
    getId(id)
  }

  renderToggleButton = () => {
    const {item} = this.props
    if (item.isVisited) {
      return <p>Visited</p>
    }
    return (
      <button onClick={this.sendId} type="button" className="VisitButton">
        Visit
      </button>
    )
  }

  render() {
    const {item} = this.props
    return (
      <li className="ConuntryListItemContainer">
        <p>{item.name}</p>
        <div className="buttonContainer">{this.renderToggleButton()}</div>
      </li>
    )
  }
}

export default CountryItem
