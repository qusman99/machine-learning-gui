import styled from "styled-components"

export const FeaturedImageWrapper = styled.div`
    grid-column: 3 / span 10;
    grid-row: 2 / 4;
    overflow: hidden;
    position: relative;

    @media ${props => props.theme.breakpoints.tablet}{
        grid-columns: 2 / span 6;
    }
`
