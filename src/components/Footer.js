import React from "react"
import {FooterWrapper, FooterSocialWrapper} from "../elements"
import {useStaticQuery, graphql} from "gatsby"



export const Footer = () => {
    // const data = useStaticQuery(graphql`
    //     query {

    //     }
    // `)

    return (
        <FooterWrapper>
            <FooterSocialWrapper>
                <p>©2021 Heriot-Watt University. All right reserved.</p>
            </FooterSocialWrapper>
        </FooterWrapper>
    )
}
