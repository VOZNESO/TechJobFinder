import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar(props) {
  return (
    <div>
      {/* ======= Sidebar ======= */}
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <Link className="nav-link collapsed" to="/admin">
              <i className="bi bi-grid" />
              <span>Dashboard</span>
            </Link>
          </li>{/* End Dashboard Nav */}
          <li className="nav-item">
            <Link className="nav-link collapsed" to="/usermanage">
              <i className="bi bi-person" />
              <span>User</span>
            </Link>
          </li>{/* End Profile Page Nav */}
          
          <li className="nav-heading">Pages</li>
          <li className="nav-item">
            <Link className="nav-link collapsed" to="/profile">
              <i className="bi bi-person" />
              <span>Profile</span>
            </Link>
          </li>{/* End Profile Page Nav */}
          
          <li className="nav-item">
            <Link className="nav-link collapsed" to="/contact">
              <i className="bi bi-envelope" />
              <span>Contact</span>
            </Link>
          </li>{/* End Contact Page Nav */}
          <li className="nav-item">
            <Link className="nav-link collapsed" to="/error">
              <i className="bi bi-dash-circle" />
              <span>Error 404</span>
            </Link>
          </li>{/* End Error 404 Page Nav */}
          <li className="nav-item">
            <Link className="nav-link collapsed" to="/blank">
              <i className="bi bi-file-earmark" />
              <span>Blank</span>
            </Link>
          </li>{/* End Blank Page Nav */}
          <li className="nav-item">
            <Link className="nav-link collapsed" to="/faq">
              <i className="bi bi-question-circle" />
              <span>F.A.Q</span>
            </Link>
          </li>{/* End F.A.Q Page Nav */}
          <li className="nav-item">
            <Link className="nav-link collapsed" to="/">
              <i className="bi bi-box-arrow-in-left" />
              <span>Logout</span>
            </Link> 
            </li>
        </ul>
      </aside>{/* End Sidebar*/}
    </div>
  );
}

export default Sidebar;