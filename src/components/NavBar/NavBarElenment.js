import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaStream, FaUserCircle, FaShoppingBasket, FaDelicious, FaTools,FaSignOutAlt} from 'react-icons/fa'
export const Nav = styled.nav`
    width: 100vw;
    height: 100px;
    background: transparent;
    background-color: black;
    /* position: sticky; */
    top: 0;
    /* height: 80px; */
    display: flex;
    justify-content: center;
    font-weight: 700;
    .a{
        text-decoration: none;
    }
`
export const NavLink = styled(Link)`
    color: #000;
    font-size: 2rem;
    /* display: flex; */
    align-items: center;
    text-decoration: none;
    cursor: pointer;    
    
    /* @media screen and (max-width:400px){
        position: absolute;
        top: 10px;
        left: 25px;
        
    } */
    .logo-text{
        margin-top: 10px;
        margin-right:30em;
    }
`
export const NavMenuList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: transparent;
    color: #000;
    position: sticky;
    .nav-logo{
        font-size: 1.5rem;
    }
`
export const NavMenuListItem= styled.li`
    margin: 1.5rem 0;
    float: left;
`
export const NavMenuListA= styled.a`
    :hover{
        background-color: tomato;
    }
`


export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLinkList = styled(Link)`
    color: white;
    font-size: 1rem;
    display: flex;
    align-items: center;
    margin: 0 3em;
    cursor: pointer;
    .selected{
        font-weight: bold;
        color: tomato
    }
    
`

export const NavIcon = styled.div`
    display: block;
    position:absolute;
    top:0;
    right: 0;
    cursor: pointer;
    color: #fff;
    p{
        font-size:0.5em;
        font-weight: bold;
    }

    .menu-text{
        transform:translate(-1000%,100%);
    }
    .cart-text{
        transform:translate(-530%,100%);
    }
    .account-text{
        transform:translate(-150%,100%);
    }
`
export const Logo = styled(FaDelicious)`
    font-size: 1em;
    background-color: #e9ba23;
`

export const Account = styled(FaUserCircle)`    
    font-size: 1.5rem;
    /* transform: translate(-70%,-100%) */
`

export const Order = styled(FaShoppingBasket)`
    font-size: 1.5rem;
    /* transform: translate(-600%,-100%) */
`

export const Bars = styled(FaStream)`
    font-size: 1.5rem;
    /* transform: translate(-1160%,-100%) */
`
export const Management = styled(FaTools)`
    font-size: 1.5rem;
    /* transform: translate(-1160%,-100%) */
`
export const SignOut = styled(FaSignOutAlt)`
    font-size: 1.5rem;
`
