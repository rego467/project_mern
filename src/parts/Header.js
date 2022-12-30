import React from 'react'
import {useLocation, Link} from 'react-router-dom'
import '../parts/index.css'

function Header(props) {
  const location = useLocation();

  const getLinkActive = (path)=>{
    return (location.pathname === path) ? "active" : ""
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container p-1">
        <Link className="navbar-brand"to={"/"} style={{fontSize: "1.7rem", fontFamily:'Catamaran'}} >Pucung Rumble</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className={`nav-item ${getLinkActive("/")}`}>
              <Link className="nav-link" to={"/"} style={{fontSize: "1.2rem", fontFamily:'Catamaran'}} >
                Home
              </Link>
            </li>
            <li className={`nav-item ${getLinkActive("/browse-by")}`}>
              <Link className="nav-link" aria-current="page" to={"/browse-by"} style={{fontSize: "1.2rem", fontFamily:'Catamaran'}}>Browse By</Link>
            </li>
            <li className={`nav-item ${getLinkActive("/stories")}`}>
              <Link className="nav-link" aria-current="page" to={"/stories"} style={{fontSize: "1.2rem", fontFamily:'Catamaran'}}>Stories</Link>
            </li>
            <li className={`nav-item ${getLinkActive("/agents")}`}>
              <Link className="nav-link" aria-current="page" to={"/agent"} style={{fontSize: "1.2rem", fontFamily:'Catamaran'}}>Agents</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Header