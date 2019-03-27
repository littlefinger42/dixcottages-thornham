import React from "react"
import style from "styled-components"

const FooterStyled = style.footer`
	background-color: #746250;
	text-align: center;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 48px;
	width: 100%;
	font-size: 14px;
	a {
		color: white;
		text-decoration: underline;
	}
	a:hover {
		color: white;
		text-decoration: none;
	}
`

export default props => (
  <FooterStyled>
    Copyright (c) 2019 Dix Cottages. All rights reserved. Contact the web
    developer at:{" "}
    <a href="https://l96.nl" title="l96.nl">
      l96.nl
    </a>
  </FooterStyled>
)
