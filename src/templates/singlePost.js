import React from "react"
import {graphql} from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx"
import Pdf from '../documents/thesis.pdf';

import {H1} from "../elements"
import {Container, Post, FeatureImage} from "../components"

const singlePost = ({data}) => {
    const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fixed
    
    return (
        <Container>
            <FeatureImage fixed={featureImage} />
            <Post>
                <H1 margin="0 0 2rem 0" textAlign="center">{data.mdx.frontmatter.title}</H1>
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
                    <a href= {Pdf}>Show Thesis</a>
            </Post>
        </Container>
    )
}

export default singlePost


export const pageQuery = graphql`
    query SinglePostQuery($id: String!){
        mdx(id: {eq:$id}){
            body
            frontmatter {
            date
            excerpt
            slug
            title
                featureImage{
                    childImageSharp{
                        fixed{
                            ...GatsbyImageSharpFixed
                        }

                    }
                }
            }
        }
        
    }
`