exports.createPages = async function({actions, graphql}){
    const {data} = await graphql(`
        query{
            allMdx(sort: {fields: frontmatter___date, order: DESC}) {
                edges {
                  node {
                    frontmatter {
                      slug
                    }
                    id
                  }
                }
              }
        }
    `)

    const perPage = 4
    const numPage = Math.ceil(data.allMdx.edges.length/perPage)

    Array.from({length : numPage}).forEach((_, i) => {
        actions.createPage({
            path: i === 0 ? `/` : `/${i + 1}`, 
            component: require.resolve("./src/templates/allAlgo.js"),
            context: {
                limit: perPage,
                skip: i*perPage,
                numPage,
                currentPage: i+1,
            }
        })
    })


    // Create a page
    data.allMdx.edges.forEach(edge => {
        const slug = edge.node.frontmatter.slug
        const id = edge.node.id
        actions.createPage({
            path: slug,
            component: require.resolve(`./src/templates/singlePost.js`),
            context: {id},
        })
    })
}