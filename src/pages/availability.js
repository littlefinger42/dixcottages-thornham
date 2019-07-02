import React from "react"
import { graphql } from "gatsby"
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
          <section>
            <div className="page-header">
              <h1 className="h3">How to book</h1>
            </div>
            <h2 className="h4">1 Dix Cottages</h2>
            <p>
              To make an enquiry and see the availablity calender, please go to
              our agency's page:
            </p>
            <a
              href="https://www.norfolkhideaways.co.uk/thornham-holme-next-the-sea/thornham-holiday-cottages/1-dix-cottages"
              title="Norfolk Hideaways booking agency 1 Dix Cottage"
            >
              www.norfolkhideaways.co.uk
            </a>
            <h2 className="h4">2 Dix Cottages</h2>
            <p>
              To make an enquiry and see the availablity calender, please go to
              our agency's page:
            </p>
            <a
              href="https://www.norfolkhideaways.co.uk/thornham-holme-next-the-sea/thornham-holiday-cottages/2-dix-cottages"
              title="Norfolk Hideaways booking agency 2 Dix Cottage"
            >
              www.norfolkhideaways.co.uk
            </a>
          </section>
        </Col>
        {/* <Col md={6} className="mt-3">
          <h3>News</h3>
          <ul className="list-unstyled">{Posts}</ul>
        </Col> */}
      </Row>
    </Layout>
  )
}

export default AvailabilityPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/news/*.md" } }
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
