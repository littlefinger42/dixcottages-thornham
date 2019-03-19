import React from "react"

export default props => (
  <article>
	  <h2>
		  {props.title}
	  </h2>
	  {props.children}
  </article>
)
