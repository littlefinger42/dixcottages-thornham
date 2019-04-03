exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
	if (stage === "build-html") {
	  actions.setWebpackConfig({
		module: {
		  rules: [
			{
			  test: /google-map-react/,
			  use: loaders.null(),
			},
		  ],
		},
	  })
	}
  }