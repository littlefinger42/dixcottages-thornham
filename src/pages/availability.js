import React from "react"
import Layout from "../layouts/main"
import style from "styled-components"

import { Row, Col } from "react-bootstrap"

// import imgOutside from "./2dix/images/dixcottages-2-outside-thornham-norfolk-holiday-cottage.jpg"
// import imgDownstairsKitchen from "./2dix/images/dixcottages-2-kitchen-thornham-norfolk-holiday-cottage.jpg"


export default () => (
  <Layout>
    <Row>
      <Col md={6}>
	  	<h3>News</h3>
      </Col>
      <Col md={6}>
        <h3>How to book</h3>

      </Col>
    </Row>
  </Layout>
)
