import React, { useState } from 'react'
import { connect } from 'react-redux'
import { SideBarData } from './SideBarData'
import { setIsProFile } from '../../actions/SideAction'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import "./SideBarStyle.css"
const SideBar = (props) => {
    let isProfile = true;
    return (
        <div className="SideBar">
            <ul className="SideBarList">
                {SideBarData.map((val, key) =>
                    <li className="row-item" key={key}
                        // onClick={() => {
                        //     if (val.title === "Profile") return props.setIsProFile(isProfile)
                        //     else return props.setIsProFile(!isProfile)}}
                    >
                        <Link className="li-link" to={val.link}>
                            <div id="icon">
                                {val.icon}
                            </div>
                            <div id="title">
                                {val.title}
                            </div>
                        </Link>
                    </li>

                )}
            </ul>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setIsProfile: (isProfile) => dispatch(setIsProFile(isProfile))
    }
}

export default connect(mapDispatchToProps)(SideBar)
