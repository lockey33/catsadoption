import styled, {css, useTheme} from "styled-components";

export const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: center;
    justify-content: center;
    align-items:center;
`

export const Title = styled.h1`
    text-align: center;
`

export const List = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 40px;
    @media (max-width: ${props => props.theme.breakpoints.lg}px){
        flex-direction: column;
    }
`
export const ListItem = styled.li `
    width: 25%;
    padding: 2rem;
    @media (max-width: ${props => props.theme.breakpoints.lg}px){
        width: 90% !important;
        padding: 1rem;
    }
`

export const Image = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
`
