import React from "react"
import {Container, FeatureImage, Content, ContentCard} from "../components"
import Button from '@material-ui/core/Button'

const IndexPage = () =>{
  return (
  <Container>
    <FeatureImage />
    <Content>
      <ContentCard 
      date="" 
      title="This is my Machine Learning experiments" 
      excerpt="I shall add more details later" 
      slug= "/test"/>
    </Content>
  </Container>
  )
}

export default IndexPage