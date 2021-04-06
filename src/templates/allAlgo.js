import React from "react"
import {graphql} from "gatsby"
import {Container, Content, ContentCard, FeatureImage,} from "../components"
import {H1, P} from "../elements"

const allAlgo = ({pageContext, data}) => {
    // const {currentPage, numPages}  = pageContext
    // const isFirst = currentPage === 1

    // const isLast = currentPage === numPages

    // const prevPage = currentPage -1 === 1 ? "/": `/${currentPage - 1}`
    // const nextPage = `/${currentPage + 1}`

    const posts = data.allMdx.edges

    return(
        <Container>
            <FeatureImage />
            <Content>
                <H1 textAlign="center" margin="0 0 1rem 0">Machine Learning Algorithms</H1>
                <P color="dark2" textAlign="center">This site shows the results of the different Machine Learning Algorithms run on the Middle Eastern dataset.
                <br /> 
                <br />
                A much more detailed info on these algorithms is stated in the following pages </P>

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
            {/* <Pagination
                isFirst={isFirst}
                isLast={isLast}
                prevPage={prevPage}
                nextPage={nextPage}
            /> */}

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