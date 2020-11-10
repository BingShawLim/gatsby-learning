import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query FirstQuery {
    site {
      siteMetadata {
        author
        data
        description
        title
        person {
          age
          name
        }
      }
    }
  }
`

function Header() {
  const data = useStaticQuery(getData)
  console.log(data)
  return (
    <div>
      <h1>this is heading</h1>
    </div>
  )
}

export default Header
