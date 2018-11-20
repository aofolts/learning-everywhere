const path = require('path')

const templates = {
  page: path.resolve('./src/templates/page.js'),
  home: path.resolve('./src/templates/page-home.js')
}

exports.createPages = ({graphql,actions}) => {
  const {
    createPage
  } = actions

  const createPages = new Promise((resolve,reject) => {
    resolve(
      graphql(
        `
          {
            pages: allContentfulPage {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then(({
        errors,
        data
      }) => {
        if (errors) {
          console.log(errors)
          reject(errors)
        }

        const pages = data.pages.edges.map(entry => entry.node)
        
        pages.forEach(entry => {
          let slug = entry.slug

          createPage({
            path: slug === `home` ? '/' : `/${slug}/`,
            component: templates[slug] || templates.page,
            context: {
              slug
            }
          })
        })
      })
    )
  })

  return Promise.all([
    createPages
  ])
}