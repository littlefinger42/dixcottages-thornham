import React from "react"
import { Media } from "react-bootstrap"

const NewsItem = ({ post }) => (
  <Media as="li">
    <Media.Body>
      <h4 className="h4">{post.frontmatter.title}</h4>
      <p>{post.excerpt}</p>
    </Media.Body>
  </Media>
)

export default NewsItem
