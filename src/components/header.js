import React from "react"
import styled from "styled-components"

const HeaderStyled = styled.header`
	padding: 32px;
`

const TitleStyled = styled.h1`
	font-size: 72px;
	font-family: 'Poiret One';
`

const SubtitleStyled = styled.h2`
	font-size: 20px;
	font-family: 'Poiret One';
`

export default props => (
  <HeaderStyled>
    <hgroup class="text-center">
      <TitleStyled>Dix Cottages</TitleStyled>
      <SubtitleStyled>
				Two delightful adjoining holiday cottages set in idyllic gardens in the centre of Thornham, North Norfolk.
      </SubtitleStyled>
    </hgroup>
  </HeaderStyled>
)
