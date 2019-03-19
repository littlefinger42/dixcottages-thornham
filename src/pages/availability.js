import React from "react"
import Layout from "../layouts/main"
import NewsItem from "../components/newsitem"
import style from "styled-components"

import { Row, Col } from "react-bootstrap"

const newsPosts = ({
	data: {
		allMarkdown: { edges },
	},
}) => {
	const newsItems = edges.filter(edge => !!edge.node.frontmatter.date).map(edge => <NewsItem title={edge.node.frontmatter.title}>edge.node</NewsItem> )
	return <div>{newsItems}</div>
}

export default () => (
  <Layout>
    <Row>
      <Col md={6}>
	  	<h3>News</h3>
		{newsPosts}
      </Col>
      <Col md={6}>
        <h3>How to book</h3>
      </Col>
    </Row>
  </Layout>
)
