import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"

export const ButtonWrapper = styled(props => <Link {...props} />)`
    padding: 0.5rem 0.75 rem;
    background-color: ${props => props.theme.colors.main1};
    border-radius: 4.5rem;
    color: ${props => props.theme.colors.light1};
    font-weight: 700;
    font-size: 0.875rem;
    width: fit-content;
    cursor: pointer;
    transition: filter 0.3s ease;
    &:hover,
    &:focus {
        filter: brightness(110%);
    }
`