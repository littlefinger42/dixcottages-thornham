import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import { Container, Row } from "react-bootstrap"
import "normalize.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "../components/type.css"

var containerStyle = {
  fontFamily: "Raleway",
  boxShadow: "0 0 20px #777",
}

export default ({ children }) => (
  <Container style={containerStyle}>
    <Header headerText="Homepage" />
    <Row>
      <Navbar />
    </Row>
    {children}
    <Row>
      <Footer />
    </Row>
  </Container>
)

// style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}
