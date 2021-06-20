import React from 'react'
import { connect } from 'react-redux'
import { Bars, Nav, Account, Order, Logo,SignOut, NavMenuList, NavMenuListItem, NavLinkList, Management } from './NavBarElenment'
import {setLogout} from '../../actions/LoginAction'
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
                    {props.account.isLoginSuccess ?
                        (<>
                            <NavMenuListItem>
                                <NavLinkList to={'/user/id='+props.account.user.id} style={{ textDecoration: "none" }}><Account />
                                    {props.account.name}
                                </NavLinkList>
                            </NavMenuListItem>
                            <NavMenuListItem>
                                <NavLinkList to='/' style={{ textDecoration: "none" }} onClick={()=>props.setLogout()} onMouseDown={()=>{localStorage.setItem("user_id",null)}}>{console.log(props.account.isLoginSuccess)}
                                    <SignOut/>
                                    Sign out
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
const mapDispatchToProps= dispatch=>{
    return {
        setLogout: () => dispatch(setLogout(false))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
