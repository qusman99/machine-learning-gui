import React from "react"
import {graphql} from "gatsby"
import {Container, Content, ContentCard, FeatureImage} from "../components"
import {H1, P} from "../elements"

const allAlgo = ({data}) => {
    const posts = data.allMdx.edges

    return(
        <Container>
            <FeatureImage />
            <Content>
                <H1 textAlign="center" margin="0 0 1rem 0">Machine Learning Algorithms</H1>
                <P color="dark2" textAlign="center">This site shows the results of the different Machine Learning Algorithms run on the 
                    Middle Eastern dataset and shows the sectors responsible for high emissions within the country.
                <br /> 
                <br />
                A much more detailed info on these algorithms is stated in the following pages 
                <br />

                </P>

                {posts.map(post =>(
                    <ContentCard 
                        key={post.node.frontmatter.slug}
                        date={post.node.frontmatter.date}
                        title={post.node.frontmatter.title}
                        excerpt={post.node.frontmatter.excerpt}
                        slug={post.node.frontmatter.slug}
                    />
                ))}
            </Content>
        </Container>
    )
}

export default allAlgo

export const pageQurey = graphql`
    query AllPostsQuery($skip: Int!, $limit: Int!){
        allMdx(sort: {fields: frontmatter___date, order:DESC}, skip: $skip, limit: $limit){
            edges {
                node {
                    frontmatter {
                        slug
                        title
                        excerpt
                    }
                }
            }
        }  
    }
`