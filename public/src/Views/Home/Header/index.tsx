import React from 'react'
import './style.module.css'

const Header = () => (
<header id="header">
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      { /* eslint-disable-next-line */ }
      <a className="navbar-brand d-flex align-items-center logo" href="#">
        <img src="/img/logo.png" alt="Logo" className="mr-2" />
        <h1 className="text-center m-0 d-inline-flex" style={{fontSize: "1rem"}}>
          <span> Envases para Delivery  </span> 
          <span>  y Derivados E.I.R.L </span>
        </h1>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" 
        data-target="#navegacion" aria-controls="navegacion" 
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navegacion">
        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
        </ul>
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#productos">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#clientes">Clientes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
)

export default Header