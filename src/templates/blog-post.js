import React from 'react'
import Helmet from 'react-helmet'

// import '../css/blog-post.css'

export default ({
  data
}) => {
  const { markdownRemark: post } = data
  const { title, by, artBy, headerImage } = post.frontmatter

  return (
    <div className='blog-post-container'>
      <Helmet title={title} />
      <div className='blog-post'>
        <h1>{title}</h1>
        <img src={`/public/${headerImage}`} />
        <hr />

        <p><strong>{by}</strong></p>
        <p>{artBy}</p>

        <div className='blog-post-content' dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
