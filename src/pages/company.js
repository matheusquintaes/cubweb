import React from "react"

import Layout from "../components/Common/Layout"

import TopContent from '../sections/Company/TopContent'
import About from '../sections/Company/About'
import Gallery from '../sections/Company/Gallery'
import HireUs from '../sections/Company/HireUs'
import WorkWithUs from '../sections/Company/WorkWithUs'
import CallToAction from '../sections/Company/CallToAction'

import SEO from "../components/seo"



const CompanyPage = () => (
  <>
    <SEO title="CompanyPage" />
    <Layout>
      <TopContent/>
      <About/>
      <Gallery/>
      <HireUs/>
      <WorkWithUs/>
      <CallToAction/>
    </Layout>
  </>
)

export default CompanyPage
