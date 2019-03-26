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
      <Carousel
        onSelect={function() {
          document.querySelectorAll("img[data-src]").forEach(function($img) {
            var src = $img.getAttribute("data-src")
            $img.setAttribute("src", src)
            $img.removeAttribute("data-src")
          })
        }}
      >
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" data-src={slide2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" data-src={slide3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" data-src={slide4} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" data-src={slide5} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" data-src={slide6} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" data-src={slide7} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" data-src={slide8} alt="Third slide" />
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
            Found in the heart of the costal village of Thornham the cottages
            are perfectly located for walking, beaching, fine dinning or just
            relaxing. Equidistant between the nature reserves at Titchwell and
            Holme-next-the-Sea the cottages provide a warm welcome all year
            round.
          </p>
          <p>
            The flexible accommodation can be booked as a pair to cater for
            large family gatherings of up to 10 ( 12 when incorporating the bed
            settee) or singularly for smaller groups. Both cottages benefit from
            pretty south facing well stocked south facing gardens, barbeques and
            parking for 2 vehicles each.
          </p>
          <p>
            The cottages have been renovated by the present owners to a high
            standard with luxury furnishings, well equipped kitchens, log
            burning stoves, digital TV’s and wifi and first class house-keeping.
          </p>
        </article>
      </Col>
    </Row>
  </Layout>
)
