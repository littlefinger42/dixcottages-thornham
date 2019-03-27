import React from "react"
import Layout from "../layouts/main"
import Map from "../components/map"

import { Row, Col } from "react-bootstrap"

export default () => (
  <Layout>
    <Row>
      <Map />
    </Row>
    <br />
    <Row>
      <Col md={6}>
        <article>
          <h1 className="h3">Thornham</h1>
          <p>
            Thornham is a pretty village on the North Norfolk coast, an area of
            outstanding natural beauty and is an excellent base to explore the
            beautiful coastline and surrounding countryside.
          </p>
          <p>
            Dix cottages are within walking distance of all village amenities
            including 3 pubs/restaurants, café and deli. The Orange Tree is
            directly opposite, the Coach House and Lifeboat Inns are a couple of
            minutes walk away. Also nearby is an excellent farm shop selling
            local produce and the Thornham deli, fantastic for late breakfasts
            after a walk on the beach.
          </p>
          <p>
            Thornham has a beautiful and unspoilt sandy beach, surrounded by
            marsh and inlets, reached via the coastal path. From here you can
            walk right along the coast towards Hunstanton. The RSPB reserve at
            Titchwell is just a mile from Thornham. Sailing, tennis, windsurfing
            and golf can be found nearby.
          </p>
          <p>
            The traditional seaside towns of Hunstanton, Brancaster, Burnham
            Market and Holkham with its magnificent beach, are within easy
            reach.
          </p>
        </article>
      </Col>
      <Col md={6}>
        <ul>
          <li>
            The Orange Tree (
            <a href="http://www.theorangetreethornham.co.uk/">
              http://www.theorangetreethornham.co.uk/
            </a>
            )<br /> specialising in award winning sea food cuisine.This has a
            popular restaurant and great bar, outdoor eating and children
            welcome..
          </li>
          <li>
            The Lifeboat Inn (
            <a href="http://www.lifeboatinnthornham.com/">
              http://www.lifeboatinnthornham.com/
            </a>
            )<br /> A 16th century ale house with a murkey smuggling past but
            now a popular place to eat and drink not far from the old harbour.
          </li>
          <li>
            The Chequers (
            <a href="http://www.chequersinnthornham.com/">
              http://www.chequersinnthornham.com/
            </a>
            )<br /> recently refurbished with delicious home cooked pizza. Great
            for families.
          </li>
          <li>
            Drove Orchards Farm Shop (
            <a href="http://www.droveorchards.com/">
              http://www.droveorchards.com/
            </a>
            )<br /> The home of over 150 varieties of English Apple, including
            over 100 originating from East Anglia.
          </li>
          <li>
            The Deli and Coffee Shop (
            <a href="http://www.villagedelithornham.com/">
              http://www.villagedelithornham.com/
            </a>
            )<br /> Great or midmorning coffee or light lunch/supper. Superb
            range of local norfolk produce.
          </li>
        </ul>
      </Col>
    </Row>
  </Layout>
)
