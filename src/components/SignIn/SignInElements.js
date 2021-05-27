import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
export const Form= styled.form`
    font-family:'Kanit', sans-serif;
    background-color: #000;
    background-image: "../../images/product-2.jpg";
    margin: 2em 20em;
    border: 3px solid #f1f1f1;
    .imgcontainer{
        text-align: center;
        margin: 24px 0 12px 0;
    }
`
export const FormInput= styled.input`
    width: 100%;
    font-size: 1em;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    
`
export const FormButton= styled.button`
    background-color: #e31837;
    color: white;
    width: 100%;
    padding: 15px;
    margin: 10px 2px;
    border: none;
    cursor: pointer;
    font-size: 1em;
    .btn-txt-login{
        
        font-style: normal;
    }
    .sign-up-btn-link{
        display: block;
    }
    &:hover{
        background: #ffc500;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
    }
`
export const FormContainer= styled.div`
    padding: 16px;

`
export const FormSpan= styled.span`
    float: right;
    padding-top: 16px;
    @media screen and (max-width: 300px) {
        display: block;
        float: none;
    }
`
export const FormImg= styled.img`
    width: 90%;
    height: 200px;
    margin: 0;
    border-radius: 10%;

`
export const FormText= styled.label`
    color: #fff;
    font-size: 1.5em;
`
export const FormLink = styled(Link)`
    color: white;
    font-size: 1rem;
    display: flex;
    align-items: center;
    margin: 0 5em;
    text-decoration: none;
    cursor: pointer;
    .selected{
        font-weight: bold;
        color: tomato
    }
`