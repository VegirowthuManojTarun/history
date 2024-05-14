// id: 0,
//     timeAccessed: '07:45 PM',
//     logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
//     title: 'Instagram',
//     domainUrl: 'instagram.com',

import './index.css'

const HistoryItem = props => {
  const {item, deleteItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = item
  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="HistoryItem">
      <div className="history-details">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="web-logo" />
        <p className="title">{title}</p>
        <p className="url">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="dlt-section"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default HistoryItem
