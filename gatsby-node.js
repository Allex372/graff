const path = require('path');

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  // Перевірка, що це статичний ресурс (наприклад, зображення, CSS, JavaScript)
  if (node.internal.type === "File") {
    // Встановлення "Cache-Control" заголовка для статичних ресурсів
    createNodeField({
      node,
      name: "Cache-Control",
      value: "public, max-age=31536000", // Максимальний термін кешування (один рік)
    });
  }
};

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
