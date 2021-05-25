import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Nav, NavMenuList, NavLinkList, NavMenuListItem } from '../../components/NavBar/NavBarElenment'
import MenuPizzas from "./menu-detail/menupizzas"
import MenuDesserts from './menu-detail/menudesserts'


const Menupage = () => {
    return (
        <Router>
            <Nav style={{ backgroundColor: "yellow", height: "50px" }}>
                <NavMenuList>
                    <NavMenuListItem>
                        <NavLinkList to="/menu/pizzas" activeStyle={{ fontWeight: "bold", color: "tomato" }}>
                            <p>Pizzas</p>
                        </NavLinkList>
                    </NavMenuListItem>
                    <NavMenuListItem>
                        <NavLinkList to="/menu/desserts" activeStyle={{ fontWeight: "bold", color: "tomato" }}>
                            <p>Desserts</p>
                        </NavLinkList>
                    </NavMenuListItem>
                </NavMenuList>
            </Nav>
            <Route exact path="/menu/pizzas" component={MenuPizzas}/>
            <Route exact path="/menu/desserts" component={MenuDesserts}/>
        </Router>
    )
}

export default Menupage
