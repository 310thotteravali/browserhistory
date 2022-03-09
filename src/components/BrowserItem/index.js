import './index.css'

const BrowserItem = props => {
  const {browserDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = browserDetails

  const onDeleteHistory = () => {
    deleteHistory(id)
  }

  return (
    <li className="browser-item">
      <p className="para">{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" className="browser-image" />
      <p className="heading">{title}</p>
      <p className="paragraph">{domainUrl}</p>
      <button
        type="button"
        className="delete-btn"
        onClick={onDeleteHistory}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}
export default BrowserItem
