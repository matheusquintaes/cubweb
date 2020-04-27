import React from "react"
import Layout from "../components/Common/Layout"
import SEO from "../components/seo"

import TopContent from '../sections/Home/TopContent'
import HowWeWork from '../sections/Home/HowWeWork'
import Projects from '../sections/Home/Projects'
import Testemonial from '../sections/Home/Testemonial'
import CallToAction from '../sections/Home/CallToAction'

const IndexPage = () => (

  <>
    <SEO title="Home" />
    <Layout>
      <TopContent/>
      <HowWeWork/>
      <Projects/>
      <Testemonial/>
      <CallToAction/>
    </Layout>
  </>
)

export default IndexPage
