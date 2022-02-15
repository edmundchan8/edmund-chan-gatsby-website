import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const BlogPage = ({data}) => {
    return(
        <Layout pageTitle="My Blog Posts">
            <ul>
                { data.allFile.nodes.map(node => (
                <li key={node.name}>
                    <h2>{node.name}</h2>
                    </li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }`

export default BlogPage