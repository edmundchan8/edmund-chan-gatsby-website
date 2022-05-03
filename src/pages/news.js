import * as React from 'react'
import NewsApi from '../components/newsApi'
import Layout from '../components/layout'

function index() {

  return (
  <div>
    <Layout pageTitle="News API Page">
      <p>Playing with a <a href="https://newsapi.org/docs">news API</a> but this only works locally unless I pay for it</p>
      <NewsApi />
    </Layout>
  </div>
  )
}

export default index 