import React,{useState} from 'react'
import { Route, Link } from 'react-router-dom'
import { SideBarData } from './SideBarData'
import "./SideBarStyle.css"
const SideBar = () => {
    const [hover,setHover]= useState();
    const handleMouseEnter = () => {
        setHover({ hover: true });
      }
    const handleMouseLeave = () => {
        setHover({ hover: false });
      }
    return (
        <div  className ="SideBar">
            <ul className="SideBarList">
                {SideBarData.map((val, key) =>
                    <li className="row-item" key={key} onClick={()=>window.location.pathname=val.link} >
                        <div id="icon">
                            {val.icon}
                        </div>
                        <div id="title">
                            {val.title}
                        </div>
                    </li>

                )}
            </ul>
        </div>
    )
}



export default SideBar
