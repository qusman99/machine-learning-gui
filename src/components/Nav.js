import React from "react"
import {useStaticQuery, Link, graphql} from "gatsby"
import {NavWrapper} from "../elements"

export const Nav = () =>{

    const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: {eq: "ml.png"}){
                publicURL
            }
        }
    `)

    return(<NavWrapper>
        <Link to="/">
            <img src={data.logo.publicURL} alt=" ML Logo" />
        </Link>
    </NavWrapper>
    )
}