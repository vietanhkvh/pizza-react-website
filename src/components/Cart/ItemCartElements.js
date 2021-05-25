import styled from 'styled-components'
import { Link} from 'react-router-dom'

export const CartDiv= styled.div`
   width: 99vw;
    min-height: 99vh;
    padding: 5rem calc((100vw-1300)/2);
    background: #150f0f;
    color: #fff;

` 
export const CartImg= styled.image`
    height: 300px;
    min-width:300px;
    max-width:100%;
`
export const CartText= styled.h1`
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
`
export const CartSpan= styled.span`
    font-size: 1em;
`
export const CartButton= styled.button`
    font-size: 1rem;
    padding: 1rem 4rem;
    border: none;
    background: #e31837;
    color: #fff;
    transition: 0.2s ease-ease-out;

    &:hover{
        background: #ffc500;
        transition: 0.2s ease-out;
        cursor:pointer;
        color: #000;

    }
`
export const CartLink= styled(Link)`
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
`