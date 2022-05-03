import * as React from 'react'
import NewsApi from '../components/newsApi'
import Layout from '../components/layout'

function index() {

  return (
  <div>
    <Layout pageTitle="News API Page">
      <p>News API</p>
      <NewsApi />
    </Layout>
  </div>
  )
}

export default index 