import React, { useState } from 'react'
import { connect } from 'react-redux'
import { SideBarData, SideBarDataAdmin} from './SideBarData'
import { setIsProFile } from '../../actions/SideAction'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import "./SideBarStyle.css"
const SideBar = (props) => {
    let id = props.account.user.id
    let isAdmin = props.account.isAdmin
    const listSideberAdmin = SideBarDataAdmin.map((val, key) =>
        <li className="row-item" key={key}>
            <Link className="li-link" to={"/user/id=" + id + "/" + val.title}>
                <div id="icon">
                    {val.icon}
                </div>
                <div id="title">
                    {val.title}
                </div>
            </Link>
        </li>
    )
    return (
        <div className="SideBar">
            <ul className="SideBarList">
                {isAdmin? listSideberAdmin:null}
                {SideBarData.map((val, key) =>
                    <li className="row-item" key={key}>
                        <Link className="li-link" to={"/user/id=" + id + "/" + val.title}>
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

const mapStateToProps = state => {
    return {
        account: state.accounts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setIsProfile: (isProfile) => dispatch(setIsProFile(isProfile))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
