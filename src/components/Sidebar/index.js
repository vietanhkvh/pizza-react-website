import React from 'react'
import {Route, Link} from 'react-router-dom'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute,
} from './SidebarElements'

const sidebars=[
    {
        name : 'Pizzas',
        to : '/pizzas',
        exact : true
    },
    {
        name : 'Desserts',
        to : '/desserts',
        exact : false
    },
    {
        name : 'Full Menu',
        to : '/fullmenu',
        exact : false
    },
]

//Custom Link
const SideLink = ({
    label,
    to,
    activeOnlyWhenExact
}) => {
    return (
        <Route 
            path={to}
            exact={activeOnlyWhenExact}
            children={ ({ match }) => { //match la doi tuong xac dinh su trung khop cua URL
                var active = match ? 'active abc' : '';

                return (
                    // <li className={`my-li ${active}`}>
                        <SidebarLink  to={to} className="my-link">{label}</SidebarLink>
                    // </li>
                );
            }}
        />
    );
}

const showSidebar=(sidebars)=>{
    var result=null;
    if(sidebars.length>0){
        result= sidebars.map((sidebar, index)=>{
            return(
                <SideLink
                    key={index}
                    label={sidebar.name}
                    to={sidebar.to}
                    activeOnlyWhenExact={sidebar.exact}
                />
            )
        })
    }
    return result;
}
const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                {showSidebar(sidebars)}
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
