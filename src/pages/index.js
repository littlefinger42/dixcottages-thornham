import React from "react"
import Layout from "../layouts/main"
import NewsItem from "../components/newsitem"

import { Row, Col } from "react-bootstrap"

import homePageImage from "./index/carousel/dix-cottage-thornham-holiday-home-family-luxury-beach-north-norfolk-2.jpg"

const indexPage = ({
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
        <div>
          <img className="img-fluid w-100" src={homePageImage} />
        </div>
      </Row>
      <Row>
        <Col>
          <h3 style={{ textAlign: "center", margin: "16px 0" }}>
            Enquiries:{" "}
            <a href="MAILTO:mail@dixcottage-thornham.co.uk">
              mail@dixcottage-thornham.co.uk
            </a>
          </h3>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <section className="mt-2">
            <p>
              <h1 className="h4">Welcome to Dix Cottages</h1>
              Found in the heart of the costal village of Thornham the cottages
              are perfectly located for walking, beaching, fine dinning or just
              relaxing. Equidistant between the nature reserves at Titchwell and
              Holme-next-the-Sea the cottages provide a warm welcome all year
              round.
            </p>
            <p>
              The flexible accommodation can be booked as a pair to cater for
              large family gatherings of up to 10 ( 12 when incorporating the
              bed settee) or singularly for smaller groups. Both cottages
              benefit from pretty, well stocked south facing
              gardens, barbeques and parking for 2 vehicles each.
            </p>
            <p>
              The cottages have been renovated by the present owners to a high
              standard with luxury furnishings, well equipped kitchens, log
              burning stoves, digital TV’s and wifi and first class
              house-keeping.
            </p>
          </section>
        </Col>
        <Col md={6}>
          <section>
            <ul className="list-unstyled mt-2">{Posts}</ul>
          </section>
        </Col>
      </Row>
    </Layout>
  )
}

export default indexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/reviews/*.md" } }
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
