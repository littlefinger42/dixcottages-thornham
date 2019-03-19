import React from "react"
import Layout from "../layouts/main"
import style from "styled-components"

import { Carousel, Row, Col } from "react-bootstrap"

// import imgOutside from "./2dix/images/dixcottages-2-outside-thornham-norfolk-holiday-cottage.jpg"
// import imgDownstairsKitchen from "./2dix/images/dixcottages-2-kitchen-thornham-norfolk-holiday-cottage.jpg"
// import imgDownstairsLiving from "./2dix/images/dixcottages-2-living-thornham-norfolk-holiday-cottage.jpg"
import imgDownstairsFloorPlan from "./2dix/images/dixcottages-2-floorplan-groundfloor.jpg"
// import imgUpstairsMaster from "./2dix/images/dixcottages-2-master-thornham-norfolk-holiday-cottage.jpg"
// import imgUpstairsTwinbed from "./2dix/images/dixcottages-2-twinbed-thornham-norfolk-holiday-cottage.jpg"
import imgUpstairsFloorPlan from "./2dix/images/dixcottages-2-floorplan-firstfloor.jpg"

const StyledCol = style(Col)`
  text-align: center;
  padding: 16px 0;
`

export default () => (
  <Layout>
    <Row>
      <StyledCol md={6}>
        <h3>2 Dix Cottages</h3>
        <p>
          2 Dix Cottages is both <b>bright</b> and <b>stylish</b> whilst
          retaining that cottage feel.
          <br />
          Sleeping <b>four</b> this little cottage is comfortable, well equipped
          and the <b>perfect</b> place to stay for that romantic getaway.
        </p>
      </StyledCol>
      <Col md={6}>
        <Row>
          <div>
            {/* <img
              src={imgOutside}
              className="img-fluid"
              alt="2 Dix Cottages Outside Garden"
            /> */}
          </div>
        </Row>
      </Col>
    </Row>
    <Row>
      <StyledCol md={{ order: 2 }}>
        <h3>Ground Floor</h3>
        <p>
          The kitchen area has painted units and wooden worktops, tiled floor,
          Belling range cooker, fridge, freezer, dishwasher, and microwave. The
          sitting space has twin sofas set around a <b>wood burning stove</b>{" "}
          and <b>wide screen television</b>.
        </p>
        <p>
          There is a utility/shower room with shower cubicle, wash basin, WC,{" "}
          <b>washing machine</b> and <b>tumble dryer</b>. The dining area has
          table with seating for eight and french doors leading out to the
          terrace and garden. Open plan stairs lead to the first floor.
        </p>
        <p>
          There is an additional snug/garden room with <b>wood burning stove</b>{" "}
          and <b>flatscreen television</b> with DVD player, and french doors to
          the garden.
        </p>
      </StyledCol>
      <Col md={6}>
        <Row>
          <Carousel>
            {/* <Carousel.Item>
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
            </Carousel.Item> */}
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
      <StyledCol md={6}>
        <h3>First Floor</h3>
        <p>
          The master bedroom has a <b>king-size bed</b> and <b>flat screen television</b>
          whilst enjoying <b>double aspect views</b> across the garden. The ensuite
          bathroom has a shower cubicle, heated towel rail, wash basin and WC.
        </p>
        <p>
          Bedroom two has a <b>super-king zip and link</b>, offering a twin option
          (please request on booking).
        </p>
        <p>
          Bedroom three has <b>full-size twin beds</b> and views over the garden.
          Bedroom three also has an ensuite with a shower cubicle, heated towel
          rail, wash basin and WC.
        </p>
        <p>
          Lastely, the family bathroom comprises of <b>twin sinks, touch operated
          mirror, roll top bath with hand held shower</b>, heated towel rail and WC.
        </p>
      </StyledCol>
      <Col md={6}>
        <Row>
          <Carousel>
            {/* <Carousel.Item>
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
            </Carousel.Item> */}
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
      <StyledCol md={{ order: 2 }}>
        <h3>Outside</h3>
        <p>
          A large sunny walled garden, facing west is laid to lawn with fruit
          trees, shrub border with <b>table tennis table</b>. There's a south
          facing terrace with table, garden seating and <b>barbeque</b>. Ample
          parking space for <b>two cars</b>.
        </p>
      </StyledCol>
      <Col md={6}>
        <Row>
          <div>
            {/* <img
              className="img-fluid"
              src={imgOutside}
              alt="2 Dix Cottages Outside Garden"
            /> */}
          </div>
        </Row>
      </Col>
    </Row>
  </Layout>
)
