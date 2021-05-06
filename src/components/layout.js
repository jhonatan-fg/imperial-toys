import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import web from '../images/web.png'

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer className="footer">
        <div class="footer">
        <ul class="foo__ul">
    <li className="foo__li"><a href="https://www.facebook.com/ImperialToysmx"><img className="social-icon" src={facebook}/></a></li>
    <li className="foo__li"><a href="https://www.instagram.com/imperialtoysmx/?hl=es"><img className="social-icon" src={instagram}/></a></li>
    <li className="foo__li"><a href="https://imperialtoys.com.mx/"><img className="social-icon" src={web}/></a></li>
  </ul>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
