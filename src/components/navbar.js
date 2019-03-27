import React from "react"
import styled from "styled-components"
import { device } from "./device"
import { Navbar, NavItem } from "react-bootstrap"
import { Link } from "gatsby"

const NavbarStyled = styled(Navbar)`
  && {
    min-height: 48px;
    width: 100%;
    background-color: #746250;
    padding: 0 16px;
  }
`
const NavItemStyled = styled(NavItem)`
  && {
    display: flex;
    align-items: center;
    text-align: center;
  }
  &:hover,
  &:focus {
    background-color: #c2a385;
  }
`

const NavbarCollapseStyled = styled(Navbar.Collapse)`
  && {
    height: 100%;
    align-items: stretch;
    justify-content: center;
  }
`
const LinkStyled = styled(Link)`
  && {
    padding: 8px;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 12px;
    color: #ffffff;
  }
  @media ${device.tablet} {
    && {
      font-size: 14px;
    }
  }
  @media ${device.laptop} {
    && {
      padding: 16px;
    }
  }
`

export default () => (
  <NavbarStyled expand="md">
    <Navbar.Toggle
      style={{backgroundColor: 'white'}}
      aria-controls="basic-navbar-nav"
    />
    <NavbarCollapseStyled id="basic-navbar-nav">
      <NavItemStyled>
        <LinkStyled to="/#">Home</LinkStyled>
      </NavItemStyled>
      <NavItemStyled>
        <LinkStyled to="/1dix/">1 Dix Cottages</LinkStyled>
      </NavItemStyled>
      <NavItemStyled>
        <LinkStyled to="/2dix/">2 Dix Cottages</LinkStyled>
      </NavItemStyled>
      <NavItemStyled>
        <LinkStyled to="/thornham/">Thornham</LinkStyled>
      </NavItemStyled>
      <NavItemStyled>
        <LinkStyled to="/availability/">News &amp; Availability</LinkStyled>
      </NavItemStyled>
    </NavbarCollapseStyled>
  </NavbarStyled>
)
