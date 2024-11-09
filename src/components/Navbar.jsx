import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded mb-4 mt-2">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          EFM
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/formulaire">
                Formulaire
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Experts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
