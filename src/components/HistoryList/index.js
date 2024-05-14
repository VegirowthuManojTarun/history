import {Component} from 'react'
import Navbar from '../Navbar'
import HistoryItem from '../HistoryItem'
import './index.css'

class HistoryList extends Component {
  initialHistoryList = this.props

  state = {
    search: '',
    historyList: this.initialHistoryList.initialHistoryList,
  }

  updateSearch = event => {
    this.setState({search: event.target.value})
  }

  deleteItem = id => {
    const {historyList} = this.state
    const filteredList = historyList.filter(each => each.id !== id)
    this.setState({historyList: filteredList})
  }

  render() {
    const {historyList, search} = this.state
    const updatedList = historyList.filter(each =>
      each.title.toLowerCase().includes(search.toLowerCase()),
    )
    return (
      <>
        <Navbar updateSearch={this.updateSearch} />
        <div className="history-list-section">
          <ul className="history-list">
            {updatedList.length ? (
              updatedList.map(each => (
                <HistoryItem
                  item={each}
                  key={each.id}
                  deleteItem={this.deleteItem}
                />
              ))
            ) : (
              <p>There is no history to show</p>
            )}
          </ul>
        </div>
      </>
    )
  }
}

export default HistoryList
