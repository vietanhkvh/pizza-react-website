import React, { useState } from 'react'
import {connect} from 'react-redux'
import { Bars, Nav, NavIcon, NavLink, Account, Order, Logo, NavMenuList, NavMenuListItem, NavLinkList } from './NavBarElenment'
const NavBar = (props) => {
    
    return (
        <>
            {/* <Nav> */}
                {/* <NavLink to="/" className={`logo`}>
                    <Logo />
                    <p className="logo-text">Pizza Delicious</p>
                </NavLink> */}

                {/* <NavLink to='/menu/pizzas'>
                    <NavIcon >
                        <p className={`menu-text`}>Menu</p>
                        <Bars />
                    </NavIcon>
                </NavLink>

                <NavLink to='/signin'>
                    <NavIcon>
                        <p className={`account-text`}>Sign In</p>
                        <Account />

                    </NavIcon>
                </NavLink>

                <NavLink to='/order-cart'>
                    <NavIcon>
                        <p className={`cart-text`}>Order</p>
                        <Order />
                    </NavIcon>
                </NavLink> */}
            {/* </Nav> */}
                <NavMenuList>
                    <Nav>
                        <NavMenuListItem><NavLinkList className='nav-logo' to=''><Logo/>PizzaDelicious</NavLinkList></NavMenuListItem>
                        <NavMenuListItem><NavLinkList className='nav-menu' to='/menu/pizzas'><Bars/>Menu</NavLinkList></NavMenuListItem>
                        <NavMenuListItem><NavLinkList to='/order-cart'><Order/>Order</NavLinkList></NavMenuListItem>
                        <NavMenuListItem>
                             {props.account.isLoginSuccess==true ?
                                (<NavLinkList to='/user'><Account/>
                                    {props.account.fullName}
                                </NavLinkList>)
                                :(<NavLinkList to='/signin'><Account/>Sign In</NavLinkList>)}    
                        </NavMenuListItem>
                    </Nav>
                </NavMenuList>
        </>
    )
}
const mapStateToProps=state=>{
    return{
        account:state.accounts
    }
}
export default connect(mapStateToProps,null)(NavBar)
