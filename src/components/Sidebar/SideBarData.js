import React from 'react'
import {FaUserCog,FaRegListAlt,FaMoneyBill,FaPizzaSlice} from 'react-icons/fa'
export const SideBarData = [
    {
        title: "Profile",
        icon: <FaUserCog/>,
        link: "/user/id="+localStorage.getItem("user_id")+"/profile"
    },
    {
        title: "History",
        icon: <FaRegListAlt/>,
        link: "/user/id="+localStorage.getItem("user_id")+"/history"
    },
]
export const SideBarDataAdmin = [
    {
        title: "Bills",
        icon: <FaMoneyBill/>,
    },
    {
        title: "Products",
        icon: <FaPizzaSlice/>,
    },
]

