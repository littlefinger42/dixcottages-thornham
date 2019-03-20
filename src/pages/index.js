import React from "react"
import Layout from "../layouts/main"

import { Carousel, Row, Col } from "react-bootstrap"

import slide1 from "./index/carousel/dix-cottage-thornham-holiday-home-family-luxury-beach-north-norfolk-1.jpg"
import slide2 from "./index/carousel/dix-cottage-thornham-holiday-home-family-luxury-beach-north-norfolk-2.jpg"
import slide3 from "./index/carousel/dix-cottage-thornham-holiday-home-family-luxury-beach-north-norfolk-3.jpg"
import slide4 from "./index/carousel/dix-cottage-thornham-holiday-home-family-luxury-beach-north-norfolk-4.jpg"
import slide5 from "./index/carousel/dix-cottage-thornham-holiday-home-family-luxury-beach-north-norfolk-5.jpg"
import slide6 from "./index/carousel/dix-cottage-thornham-holiday-home-family-luxury-beach-north-norfolk-6.jpg"
import slide7 from "./index/carousel/dix-cottage-thornham-holiday-home-family-luxury-beach-north-norfolk-7.jpg"
import slide8 from "./index/carousel/dix-cottage-thornham-holiday-home-family-luxury-beach-north-norfolk-8.jpg"

export default () => (
  <Layout>
    <Row>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide4} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide5} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide6} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide7} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide8} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
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
      <Col>
        <article className="mt-2">
          <p>
            In 1842, Joseph Dix, Mariner, bought himself a plot of land in the
            port of Thornham. He built a row of three cottages. A hundred years
            later, in 1960, the then tied cottages were purchased by Wing
            Commander and Mrs Claude Dunkerley. A great renovation took place,
            three typical Norfolk cottages, brick fronted and the cheaper flint
            across the back, became one carousel and one small.
          </p>
          <p>
            Dix Cottages were loved and cared for. Fruit trees, apple, pear,
            plum and peach were planted in the garden along with the roses. The
            sun shone through the south and west facing windows and the feeling
            of happiness and contentment that remains today was nurtured.
          </p>
          <p>
            Dix cottages are now two beautifully renovated and cared for holiday
            cottages, stylish, comfortable and beautifully appointed.
          </p>
          <p>
            Found in the heart of Thornham, directly opposite the popular Orange
            Tree Pub, the cottages are perfectly located for walking, beaching,
            relaxing, fine dining and just relaxing.
          </p>
          <p>
            Equidistant between both the nature reserves at Titchwell and
            Holme-next-the-Sea the cottages welcome visitors all year round.
          </p>
        </article>
      </Col>
    </Row>
  </Layout>
)
