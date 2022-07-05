import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-sm navbar-${props.mode} bg-${props.mode}`}>
      {/* <!-- Container wrapper --> */}
      <div className="container-fluid">
        {/* <!-- Toggle button --> */}
        <button
          className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
          <i className="fas fa-bars"></i>
        </button>

        <a className="navbar-brand mt-2 mt-lg-0 fw-bold" href="#">{props.title}</a>
        {/* <!-- Collapsible wrapper --> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <!-- Navbar brand --> */}
          {/* <Link className="navbar-brand mt-2 mt-lg-0 fw-bold" to="/">{props.title}</Link> */}

          {/* <!-- Left links --> */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" to="/">Home</Link> */}
              <a className="nav-link active" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">{props.about}</Link>
            </li> */}
          </ul>
          {/* <!-- Left links --> */}
        </div>

      </div>

      {/* <form className="d-flex input-group w-auto mr-4">
        <input
          type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
          aria-describedby="search-addon"
        />
        <span className="input-group-text border-0" id="search-addon">
          <i className="fas fa-search"></i>
        </span>
      </form> */}
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
