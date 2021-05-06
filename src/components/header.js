import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/imperial-logo.png';
import "./header.css";
import 'bootstrap/dist/css/bootstrap.css';




const Header = ({ siteTitle }) => (
  <header>
<nav class="navbar bg-navbar">
  <img className="logo" src={logo}/>
  <ul class="nav__ul">
    <li className="nav__li"><a href="">Arrivals</a></li>
    <li className="nav__li"><a href="">Preventas</a></li>
    <li className="nav__li"><a href="">Destacados</a></li>
    <li className="nav__li"><a href="">Tienda</a></li>
  </ul>
</nav>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

