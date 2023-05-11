const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query Services {
      allStrapiService {
        nodes {
          url
          category
        }
      }
    }
  `)

  data?.allStrapiService?.nodes?.forEach(node => {
    const { url, category } = node;
    actions.createPage({
      path: `/${category}/${url}`,
      component: path.resolve('./src/templates/single-service.js'),
      context: { url }
    })
  });
}
