import React, { useState, useEffect } from 'react'
import { Nav } from 'react-bootstrap'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import History from '../../components/HistoryOrder'
import Profile from '../../components/ProfileUser'
import Sidebar from '../../components/Sidebar'
import Bills from '../../components/Bills'
import Products from '../../components/ProductsManager'
const UserPage = (props) => {
        let id = props.account.user.id
        return (
                <Router>
                        <table className="table" style={{
                                height: "80vh",
                                padding: "0",
                        }}>
                                {console.log("123")}
                                {console.log(props.sideUser.isProfile)}
                                <td style={{
                                        width: "250px",
                                        padding: "0",
                                }}>
                                        <Sidebar />
                                </td>
                                <td style={{
                                        padding: "0",
                                }}>
                                        <Route path={"/user/id=" + id + "/Profile"} component={Profile} />
                                        <Route path={"/user/id=" + id + "/History"} component={History} />
                                        <Route path={"/user/id=" + id + "/Bills"} component={Bills} />
                                        <Route path={"/user/id=" + id + "/Products"} component={Products} />
                                </td>
                        </table>
                </Router>
        )
}
const mapStateToProps = (state) => {
        return {
                sideUser: state.sideUser,
                account: state.accounts
        }
}
export default connect(mapStateToProps)(UserPage)
