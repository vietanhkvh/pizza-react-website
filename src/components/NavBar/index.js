import React from 'react'
import { connect } from 'react-redux'
import { Bars, Nav, Account, Order, Logo, NavMenuList, NavMenuListItem, NavLinkList, Management } from './NavBarElenment'
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
            <Nav>
                <NavMenuList>
                    <NavMenuListItem><NavLinkList className='nav-logo' to='' style={{ textDecoration: "none" }}><Logo />PizzaDelicious</NavLinkList></NavMenuListItem>
                    <NavMenuListItem><NavLinkList className='nav-menu' to='/menu/pizzas' style={{ textDecoration: "none" }} activeStyle={{ fontWeight: "bold", color: "red" }}><Bars />Menu</NavLinkList></NavMenuListItem>
                    <NavMenuListItem><NavLinkList to='/order-cart' style={{ textDecoration: "none" }} activeStyle={{ fontWeight: "bold", color: "red" }}><Order />Order</NavLinkList></NavMenuListItem>
                    {props.account.isLoginSuccess == true ?
                        (<>
                            <NavMenuListItem>
                                {props.account.isAdmin == true ?
                                    <NavLinkList to='/manage' style={{ textDecoration: "none" }}><Management />
                                        Manage
                                    </NavLinkList>
                                    : null}
                            </NavMenuListItem>
                            <NavMenuListItem>
                                <NavLinkList to='/user' style={{ textDecoration: "none" }}><Account />
                                    {props.account.name}
                                </NavLinkList>
                            </NavMenuListItem>
                        </>)
                        : (
                            <>
                            <NavMenuListItem>
                                <NavLinkList to='/signin' style={{ textDecoration: "none" }} activeStyle={{ fontWeight: "bold", color: "red" }}>
                                    <Account />Sign In
                                </NavLinkList>
                            </NavMenuListItem>
                            </>
                        )
                    }
                </NavMenuList>
            </Nav>
        </>
    )
}
const mapStateToProps = state => {
    return {
        account: state.accounts
    }
}
export default connect(mapStateToProps, null)(NavBar)
