import React from "react"
import styled from "styled-components"
import { device } from "./device"

const HeaderStyled = styled.header`
  padding: 16px;
  @media ${device.tablet} {
    padding: 32px;
  }
`

const TitleStyled = styled.h1`
	font-size: 32px;
  font-family: 'Poiret One';

  @media ${device.tablet} {
    font-size: 48px;
  }
  
  @media ${device.laptop} {
    font-size: 72px;
  }
`

const SubtitleStyled = styled.h2`
	font-size: 14px;
  
  @media ${device.tablet} {
    font-size: 16px;
  }
  
  @media ${device.laptop} {
    font-family: 'Poiret One', sans-serif;
    font-size: 24px;
  }
`

export default props => (
  <HeaderStyled>
    <hgroup className="text-center">
      <TitleStyled>Dix Cottages</TitleStyled>
      <SubtitleStyled>
				Two delightful adjoining holiday cottages set in idyllic gardens in the centre of Thornham, North Norfolk.
      </SubtitleStyled>
    </hgroup>
  </HeaderStyled>
)
