const dotenv = require('dotenv');

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

exports.sourceNodes = async ({
    actions,
    createContentDigest,
    createNodeId,
    getNodesByType,
}) => {
    const { createNode } = actions;

    const axios = require('axios');

    try {
        const { data } = await axios({
            method: 'get',
            url: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMBD_API_TOKEN}&language=en-US&page=1`
        })

        
        const { results } = data;

        if (Array.isArray(results)) {
            results.forEach(movie => {
                createNode({
                    ...movie,
                    id: createNodeId(`${movie.id}`),
                    parent: null,
                    children: [],
                    internal: {
                      type: `Movie`,
                      content: JSON.stringify(movie),
                      contentDigest: createContentDigest(movie),
                    },
                  })
            })
        } else {
            throw new Error(`Error fetching data from API: ${data}` )
        }
    }
    catch (error) {
        console.log(error)
    }
}
