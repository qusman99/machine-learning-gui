import styled from "styled-components"

export const FooterWrapper = styled.footer`
    grid-column: 2 / span 12;
    min-height: 9.25rem;
    padding: 3rem, 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;

@media ${props => props.theme.breakpoints.tablet}{
    grid-columns: 2 / span 6;
}
`

export const FooterSocialWrapper = styled.div`
    align-items: center;
    flex-wrap: wrap;
    display: flex;
    text-align: center;

    & p {
        text-align: center;
        line-height: 5rem;
        flex: 0 0 100%;
    }
`