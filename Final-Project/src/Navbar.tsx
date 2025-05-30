import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{fontFamily: 'Georgia, serif'}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/Home">Welcome to My Library!</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" to="/Home">Home</Link>
            <Link className="nav-link" to="/library">Library</Link>
            <Link className="nav-link" to="/shelf">Shelf</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
