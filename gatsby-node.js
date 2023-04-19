const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query Services {
        allMarkdownRemark {
        nodes {
          frontmatter {
            url
            category
          }
        }
      }
    }
  `)
  data?.allMarkdownRemark?.nodes?.forEach(node => {
    const { url, category } = node?.frontmatter;
    actions.createPage({
      path: `/${category}/${url}`,
      component: path.resolve('./src/templates/single-service.js'),
      context: { url }
    })
  });
}
