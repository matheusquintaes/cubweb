import React from "react"

import Layout from "../components/Common/Layout"

import TopContent from '../sections/Contact/TopContent'
import Form from '../sections/Contact/Form'

import SEO from "../components/seo"


const ContactPage = () => (
  <>
    <SEO title="CompanyPage" />
    <Layout>
      <TopContent/>
      <Form/>
    </Layout>
  </>
)

export default ContactPage
