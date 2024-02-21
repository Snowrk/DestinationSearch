// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchText: '',
    savedList: this.props.destinationsList,
    initialList: this.props.destinationsList,
  }

  change = event => {
    this.setState(prevState => {
      const newList = prevState.initialList.filter(item => {
        console.log(item.name.toLowerCase())
        console.log(
          item.name.toLowerCase().includes(event.target.value.toLowerCase()),
        )
        return item.name
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      })
      console.log(newList)
      return {searchText: event.target.value, savedList: newList}
    })
  }

  // ------------function to seach for individual character--------------
  // change = event => {
  //   this.setState(prevState => {
  //     const newList = prevState.initialList.filter(item => {
  //       console.log(item.name.toLowerCase())
  //       console.log(
  //         item.name.toLowerCase().includes(event.target.value.toLowerCase()),
  //       )
  //       return event.target.value
  //         .toLowerCase()
  //         .split('')
  //         .every(char => item.name.toLowerCase().includes(char))
  //     })
  //     console.log(newList)
  //     return {searchText: event.target.value, savedList: newList}
  //   })
  // }

  render() {
    const {searchText} = this.state
    const {savedList} = this.state
    // console.log(savedList, searchText)
    return (
      <div className="bg">
        <h1>Destination Search</h1>
        <div className="search_con">
          <input
            type="search"
            value={searchText}
            onChange={this.change}
            className="search"
            placeholder="Search"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="img-sz"
          />
        </div>
        <ul className="container">
          {savedList.map(card => (
            <DestinationItem
              name={card.name}
              imgUrl={card.imgUrl}
              key={card.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
