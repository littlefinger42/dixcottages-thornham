import React from "react"
import Layout from "../layouts/main"
import NewsItem from "../components/newsitem"

import { Row, Col } from "react-bootstrap"

const AvailabilityPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <NewsItem post={edge.node} />)
  return (
    <Layout>
      <Row>
        <Col className="mt-3">
          <div className="page-header">
            <h3>Guest Reviews</h3>
          </div>
          {Posts}
        </Col>
      </Row>
    </Layout>
  )
}

export default AvailabilityPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/reviews/*/.md" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
