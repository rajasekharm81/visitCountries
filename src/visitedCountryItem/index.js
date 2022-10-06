import {Component} from 'react'
import './index.css'

class VisitedCountryItem extends Component {
  removeCountryItem = () => {
    const {id, sendId} = this.props
    sendId(id)
  }

  renderItems = () => {
    const {item} = this.props
    if (item.isVisited) {
      return (
        <li className="VisitedConuntryListItemContainer">
          <div>
            <div className="FlageContainer">
              <img
                className="countryFlag"
                src={item.imageUrl}
                alt="thumbnail"
              />
            </div>
            <div className="FlagButtonContainer">
              <p>{item.name}</p>
              <button
                onClick={this.removeCountryItem}
                type="button"
                className="RemoveButton"
              >
                Remove
              </button>
            </div>
          </div>
        </li>
      )
    }
    return null
  }

  render() {
    return this.renderItems()
  }
}

export default VisitedCountryItem
