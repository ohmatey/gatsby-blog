import React from 'react'
import Link from 'gatsby-link'

const BlogPost = ({ path, title, date, text, id }) => (
  <div className="blog-post-preview" key={id}>
    <h1>
      <Link to={path}>{title}</Link>
    </h1>
    <h2>{date}</h2>
    <p>{text}</p>
  </div>
)

export default BlogPost
