import * as React from 'react'
import Layout from '../components/layout'

const About = () => {
  return (
    <Layout pageTitle="About Me" loggedIn={true}>
      <p>Hi there! I'm the proud creator of this website!</p>
    </Layout>
  )
}

export default About