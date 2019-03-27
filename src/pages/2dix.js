import React from "react"
import Layout from "../layouts/main"
import style from "styled-components"

import { Carousel, Row, Col } from "react-bootstrap"

import imgOutside from "./2dix/images/dixcottages-2-outside-thornham-norfolk-holiday-cottage.jpg"
import imgDownstairsKitchen from "./2dix/images/dixcottages-2-kitchen-thornham-norfolk-holiday-cottage.jpg"
import imgDownstairsLiving from "./2dix/images/dixcottages-2-living-thornham-norfolk-holiday-cottage.jpg"
import imgDownstairsSnug from "./2dix/images/dixcottages-2-snug-thornham-norfolk-holiday-cottage.jpg"
import imgDownstairsFloorPlan from "./2dix/images/dixcottages-2-floorplan-groundfloor.jpg"
import imgUpstairsMaster from "./2dix/images/dixcottages-2-master-thornham-norfolk-holiday-cottage.jpg"
import imgUpstairsMasterEnsuite from "./2dix/images/dixcottages-2-master-ensuite-thornham-norfolk-holiday-cottage.jpg"
import imgUpstairsTwinbed from "./2dix/images/dixcottages-2-twinbed-thornham-norfolk-holiday-cottage.jpg"
import imgUpstairsBed2 from "./2dix/images/dixcottages-2-bed2-thornham-norfolk-holiday-cottage.jpg"
import imgUpstairsBathroom from "./2dix/images/dixcottages-2-bathroom-thornham-norfolk-holiday-cottage.jpg"
import imgUpstairsFloorPlan from "./2dix/images/dixcottages-2-floorplan-firstfloor.jpg"

const ContentBlock = style.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  padding: 16px 0;
`

export default () => (
  <Layout>
    <section>
      <Row>
        <Col md={6}>
          <ContentBlock>
            <h1 className="h3">2 Dix Cottages - Sleeps 6 (8)</h1>
            <p>
              2 Dix Cottages was once two cottages and so has very <strong>spacious</strong>
              living areas.
              <br />
              Furnished to the same high standards as its neighbour and
              benefiting from a <strong>large south west facing</strong> garden this cottage is
              perfect for a holiday with family or friends.
            </p>
          </ContentBlock>
        </Col>
        <Col md={6}>
          <Row>
            <div>
              <img
                src={imgOutside}
                className="img-fluid"
                alt="2 Dix Cottages Outside Garden"
              />
            </div>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md={{ order: 2 }}>
          <ContentBlock>
            <h2 className="h3">Ground Floor</h2>
            <p>
              The large well equipped <strong>open plan</strong> kitchen and living room has all
              the features you would expect including <strong>freezer</strong> and <strong>dishwasher</strong>.
              The dinning table <strong>comfortably seats 8</strong> whilst the seating space has
              two large sofas arranged around a <strong>wood burning stove</strong> and <strong>wide
              screen television</strong>. French doors lead out onto a <strong>sun terrace</strong> and
              gardens beyond.
            </p>
            <p>
              In addition there is a <strong>cosy snug</strong> with sofas and second <strong>wood burner</strong>
              and flatscreen television and a <strong>utility room</strong> with shower cubicle,
              WHB, WC, washing machine and tumble dryer.
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
                  src={imgDownstairsSnug}
                  alt="Dix Cottages ground floor snug"
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
            <h2 className="h3">First Floor</h2>
            <p>
              The master bedroom has a <b>king-size bed</b> and{" "}
              <b>flat screen television </b> 
              whilst enjoying <b>double aspect views</b> across the garden. The
              ensuite bathroom has a shower, heated towel rail, wash
              basin and WC.
            </p>
            <p>
              Bedroom two has a <b>super-king zip and link</b>, offering a twin
              option (please request on booking).
            </p>
            <p>
              Bedroom three has <b>full-size twin beds</b> and views over the
              garden. Including an additional ensuite with a shower,
              heated towel rail, wash basin and WC.
            </p>
            <p>
              Lastely, the family bathroom comprises of{" "}
              <b>
                twin sinks, touch operated mirror, roll top bath with hand held
                shower, seperate shower cubicle
              </b>
              , heated towel rail and WC.
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
                  src={imgUpstairsMasterEnsuite}
                  alt="Dix Cottages first floor master bedroom ensuite"
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
                  src={imgUpstairsBed2}
                  alt="Dix Cottages first floor bedroom 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={imgUpstairsBathroom}
                  alt="Dix Cottages first floor bathroom"
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
            <h2 className="h3">Outside</h2>
            <p>
              A large sunny walled garden, facing west is laid to lawn with
              fruit trees, shrub border with <b>table tennis table</b>. There's
              a south facing terrace with table, garden seating and{" "}
              <b>barbeque</b>. Ample parking space for <b>two cars</b>.
            </p>
          </ContentBlock>
        </Col>
        <Col md={6}>
          <Row>
            <div>
              <img
                className="img-fluid"
                src={imgOutside}
                alt="2 Dix Cottages Outside Garden"
              />
            </div>
          </Row>
        </Col>
      </Row>
    </section>
  </Layout>
)
