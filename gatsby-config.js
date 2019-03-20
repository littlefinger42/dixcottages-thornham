module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Raleway:400", "Poiret One:400", "sans-serif"],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/news`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-remark`,
  ],
}