import React from 'react'
import Helmet from 'react-helmet'

import BlogPost from '../components/BlogPost'

// import '../css/index.css'

export default ({ posts }) => (
  <div className="blog-posts">
    {
      posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => (
          <BlogPost
            key={post.id}
            id={post.id}
            path={post.frontmatter.path}
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            text={post.excerpt}
          />
      ))
    }
  </div>
)
