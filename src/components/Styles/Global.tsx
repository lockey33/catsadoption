import styled from "styled-components";

export const CenteredRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Row = styled.div`
    display: flex;
    @media (max-width: ${props => props.theme.breakpoints.lg}px){
        flex-direction: column;
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
`

export const Title = styled.h1`
    text-align: center;
`

export const SecondaryTitle = styled.h2`
    text-align: left;
`

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
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
    
    span {
        cursor: pointer;
    }
    
    img {
        cursor: pointer;
    }
    
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
export const Text = styled.span`
    font-size: 20px;
    font-weight: 900;
    padding-bottom: 10px;
    text-align: center;
`

export const Button = styled.button`
    cursor: pointer;
    background: white;
    box-shadow: 1px 1px 2px black;
    height: 30px;
    width: 50%;
        @media (max-width: ${props => props.theme.breakpoints.lg}px){
        width: 100% !important;
    }
`