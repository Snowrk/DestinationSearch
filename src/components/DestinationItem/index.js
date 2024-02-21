// Write your code here
import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {imgUrl, name} = this.props
    return (
      <li className="bg-1">
        <img src={imgUrl} alt={name} />
        <p>{name}</p>
      </li>
    )
  }
}

export default DestinationItem
