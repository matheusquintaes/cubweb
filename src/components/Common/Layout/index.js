import React from "react"
import PropTypes from "prop-types"

import Header from "../Header"
import Footer from "../Footer"
import GlobalStyles from "../../../styles/global"


const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <GlobalStyles/>
      {children}
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
