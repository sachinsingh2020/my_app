import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-sm navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <button
          className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
          <i className="fas fa-bars"></i>
        </button>

        <a className="navbar-brand mt-2 mt-lg-0 fw-bold" href="#">{props.title}</a>
   
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
          {/* <Link className="navbar-brand mt-2 mt-lg-0 fw-bold" to="/">{props.title}</Link> */}

       
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
           
              <a className="nav-link active" href="#">Home</a>
            </li>
           
          </ul>
    
        </div>

      </div>

      <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <p className='fw-bold'>Enable DarkMode</p>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title: "set title here",
  about: "About"
}
