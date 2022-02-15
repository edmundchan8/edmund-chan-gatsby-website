import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

function index() {
  return (
    <Layout pageTitle="Edmund's Website">
      <StaticImage
      src="../images/Nightbonder.jpg"
      alt="Nightbonder image"/>
      <p>I'm making a Gatsby Website for practice</p>
    </Layout>
  )
}

export default index 