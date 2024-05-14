import './index.css'

const Navbar = props => {
  const {updateSearch} = props
  const sendSearch = event => {
    updateSearch(event)
  }

  return (
    <nav className="navbar-section">
      <img
        className="nav-logo"
        src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
        alt="app logo"
      />
      <div className="navbar-search-section">
        <img
          className="search-logo"
          src="https://assets.ccbp.in/frontend/react-js/search-img.png "
          alt="search"
        />
        <input
          className="search-bar"
          type="search"
          placeholder="search history"
          onChange={sendSearch}
        />
      </div>
    </nav>
  )
}

export default Navbar
