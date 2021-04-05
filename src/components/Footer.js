import React from "react"
import {FooterWrapper, FooterSocialWrapper, P,} from "../elements"
import {useStaticQuery, graphql, } from "gatsby"



export const Footer = () => {
    // const data = useStaticQuery(graphql`
    //     query {

    //     }
    // `)

    return (
        <FooterWrapper>
            <FooterSocialWrapper>
                <P size="xSmall" color="dark3">©2021 Heriot-Watt University. All right reserved.</P>
            </FooterSocialWrapper>
        </FooterWrapper>
    )
}
