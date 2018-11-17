// const path = require('path')

// const templates = {
//   page: path.resolve('./src/templates/page.js'),
//   home: path.resolve('./src/templates/page-home.js')
// }

// exports.createPages = ({graphql,actions}) => {
//   const {
//     createPage
//   } = actions

//   const createPages = new Promise((resolve,reject) => {
//     resolve(
//       graphql(
//         `
//           {
//             allContentfulPage {
//               edges {
//                 node {
//                   slug
//                 }
//               }
//             }
//           }
//         `
//       ).then(result => {
//         if (result.errors) {
//           console.log(result.errors)
//           reject(result.errors)
//         }

//         const posts = result.data.allContentfulPage.edges
        
//         posts.forEach(post => {
//           let slug = post.node.slug

//           createPage({
//             path: slug === `home` ? '/' : `/${slug}/`,
//             component: templates[slug] || templates.page,
//             context: {
//               slug
//             }
//           })
//         })
//       })
//     )
//   })

//   return Promise.all([
//     createPages
//   ])
// }