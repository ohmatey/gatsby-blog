import React from 'react'
import Helmet from 'react-helmet'

import Intro from '../containers/Intro'
import BlogPostsList from '../containers/BlogPostsList'

// import '../css/index.css'

export default ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div>
      <Intro />
      <BlogPostsList posts={posts} />
    </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            headerImage
          }
        }
      }
    }
  }
`
