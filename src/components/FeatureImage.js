import React from "react"
import Img from "gatsby-image"
import {useStaticQuery, graphql} from "gatsby"
import {FeaturedImageWrapper} from "../elements"

export const FeatureImage = ({fixed}) => {
    const data = useStaticQuery(graphql`
        query{
            imageSharp(fixed: {originalName: {eq:"bleh.png"}}) {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    `)

    return (
        <FeaturedImageWrapper>
            <Img fixed = {fixed ? fixed : data.imageSharp.fixed} style = {{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "115%",
            }} />

        </FeaturedImageWrapper>
    )
}