  import PropTypes from 'prop-types'
  import {Link} from 'react-router-dom'
function Header(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode === "light" ? "secondary" : "dark"}`} aria-label="Fifth navbar example">
    <div className="container">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample05">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/404_page" className="nav-link " aria-disabled="true">404 Page</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="/" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/">Action</Link></li>
              <li><Link className="dropdown-item" to="/">Another action</Link></li>
              <li><Link className="dropdown-item" to="/">Something else here</Link></li>
            </ul>
          </li>
        </ul>
        <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"onClick={props.toggleMode}/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === "light" ? "Enable Dark Mode" : "Enable Light Mode"}</label>
        </div>
      </div>
    </div>
  </nav>
    </div>
  )
}
Header.defaultProps = {
  title:"Codesdesk"
}
Header.propTypes={
  title:PropTypes.string
}
export default Header;