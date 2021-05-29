import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Nav, NavMenuList, NavLinkList, NavMenuListItem } from '../../components/NavBar/NavBarElenment'
import MenuPizzas from "./menu-detail/menupizzas"
import MenuDesserts from './menu-detail/menudesserts'


const Menupage = () => {
    return (
        <Router>
            <Nav style={{ backgroundColor: "yellow"}}>
                <NavMenuList>
                    <NavMenuListItem>
                        <NavLinkList to="/menu/pizzas" activeStyle={{ fontWeight: "bold", color: "tomato" }} style={{textDecoration:"none"}}>
                            <p>Pizzas</p>
                        </NavLinkList>
                    </NavMenuListItem>
                    <NavMenuListItem>
                        <NavLinkList to="/menu/desserts" activeStyle={{ fontWeight: "bold", color: "tomato" }} style={{textDecoration:"none"}}>
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
