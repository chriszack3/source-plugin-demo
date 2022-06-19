import React from "react"
import { graphql } from "gatsby"
import axios from "axios"

const homePage = ({ data }) => {
  const sendRequest = async () => {
    const { data } = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=f5399fcbed2e0eaafbc7712bd82ad977&language=en-US&page=1')
    console.log(data)
  }

  const { edges } = data.allMovie
  return(
    <div>
      <h1>Hello World</h1>
      <button onClick={sendRequest}>Send Request</button>
      {
        edges.map(({ node }) => {
          return(
            <div>
              <h2>{node.title}</h2>
              <p>{node.overview}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default homePage

export const query = graphql`
  query homePageQuery {
    allMovie {
      edges {
        node {
          adult
          backdrop_path
          genre_ids
          id
          original_language
          original_title
          overview
          popularity
          poster_path
          release_date
          title
          video
          vote_average
          vote_count
        }
      }
    }
  }
`
