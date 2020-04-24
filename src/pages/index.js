import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Home from "../components/Home"

const IndexPage = () => (

  <>
    <SEO title="Home" />
    <Layout>
      <Home/>
    </Layout>
  </>
)

export default IndexPage
