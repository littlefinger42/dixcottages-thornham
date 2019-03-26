import React from "react"
import Layout from "../layouts/main"
import style from "styled-components"

import { Carousel, Row, Col } from "react-bootstrap"

import imgOutside from "./1dix/images/dixcottages-1-outside-thornham-norfolk-holiday-cottage.jpg"
import imgDownstairsKitchen from "./1dix/images/dixcottages-1-kitchen-thornham-norfolk-holiday-cottage.jpg"
import imgDownstairsLiving from "./1dix/images/dixcottages-1-living-thornham-norfolk-holiday-cottage.jpg"
import imgDownstairsFloorPlan from "./1dix/images/dixcottages-1-floorplan-groundfloor.jpg"
import imgUpstairsMaster from "./1dix/images/dixcottages-1-master-thornham-norfolk-holiday-cottage.jpg"
import imgUpstairsTwinbed from "./1dix/images/dixcottages-1-twinbed-thornham-norfolk-holiday-cottage.jpg"
import imgUpstairsFloorPlan from "./1dix/images/dixcottages-1-floorplan-firstfloor.jpg"

const ContentBlock = style.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  padding: 16px 0;
`

export default () => (
  <Layout>
    <Row>
      <Col md={6}>
        <ContentBlock>
          <h3>1 Dix Cottages - Sleeps 4</h3>
          <p>
            <i>
              “We have had a lovely stay in your cottage in the fabulous village
              of Thornham.
              <br />
              What a great little let in a wonderful location!”
            </i>
          </p>
          <p>
            1 Dix Cottages is both <b>bright</b> and <b>stylish</b> whilst
            retaining that cottage feel.
            <br />
            Sleeping <b>four</b> this little cottage is comfortable, well
            equipped and the <b>perfect</b> place to stay for that romantic
            getaway.
          </p>
        </ContentBlock>
      </Col>
      <Col md={6}>
        <Row>
          <div>
            <img
              src={imgOutside}
              className="img-fluid"
              alt="1 Dix Cottages Outside Garden"
            />
          </div>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col md={{ order: 2 }}>
        <ContentBlock>
          <h3>Ground Floor</h3>
          <p>
            Downstairs the living room is west facing, airy and light.
            <br />
            It has <b>wi-fi, Smart TV, DVD player</b> and a 
            <b>wood burning stove</b> for those chilly wintry nights.
            <br />
            The kitchen is fully equipped with all you’d expect including a dish
            washer, microwave - and a picnic basket!
          </p>
        </ContentBlock>
      </Col>
      <Col md={6}>
        <Row>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={imgDownstairsLiving}
                alt="Dix Cottages ground floor living room"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={imgDownstairsKitchen}
                alt="Dix Cottages ground floor kitchen"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={imgDownstairsFloorPlan}
                alt="Dix Cottages ground floor, floor plan"
              />
            </Carousel.Item>
          </Carousel>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <ContentBlock>
          <h3>First Floor</h3>
          <p>
            Upstairs the elegant master bedroom is spacious and calm with mp3
            player point and a big king sized bed. Bedroom two has twin 2’ 6”
            beds suitable for children. The bathroom serves both rooms.
          </p>
          <p>
            We include all bedding and towels. We also have spare buckets and
            spades for those that like to dig plus maps for walkers and bird
            watchers.
          </p>
        </ContentBlock>
      </Col>
      <Col md={6}>
        <Row>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={imgUpstairsMaster}
                alt="Dix Cottages first floor master bedroom"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={imgUpstairsTwinbed}
                alt="Dix Cottages first floor twin bedroom"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={imgUpstairsFloorPlan}
                alt="Dix Cottages first floor, floor plan"
              />
            </Carousel.Item>
          </Carousel>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col md={{ order: 2 }}>
        <ContentBlock>
          <h3>Outside</h3>
          <p>
            Outside is private off street parking for 2 vehicles with superb
            private, walled, west facing garden and patio for outside garden
            dining with table, chairs and barbeque.
          </p>
        </ContentBlock>
      </Col>
      <Col md={6}>
        <Row>
          <div>
            <img
              className="img-fluid"
              src={imgOutside}
              alt="1 Dix Cottages Outside Garden"
            />
          </div>
        </Row>
      </Col>
    </Row>
  </Layout>
)
