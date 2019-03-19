import React from "react"

const footerStyles = {
	backgroundColor: '#746250',
	textAlign: 'center',
	color: 'white',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	height: '48px',
	width: '100%',
	fontSize: '14px'
}

export default props => (
  <footer style={footerStyles}>
    Copyright (c) 2019 Dix Cottages. All rights reserved. Contact the web developer at l96.nl
  </footer>
)
