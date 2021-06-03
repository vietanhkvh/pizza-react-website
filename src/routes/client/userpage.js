import React from 'react'
import { Nav } from 'react-bootstrap'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import History from '../../components/HistoryOrder'
import Profile from '../../components/ProfileUser'
import Sidebar from '../../components/Sidebar'
const UserPage = (props) => {
        return (
                <Router>
                <table className="table" style={{
                        height: "80vh",
                        padding: "0",
                }}>
                        {console.log("123") }
                        {console.log(props.sideUser.isProfile) }
                        <td style={{
                                width: "250px",
                                padding: "0",
                        }}>
                                <Sidebar />
                        </td>
                        <td style={{
                                padding: "0",
                        }}>
                                <Route path={"/user/id="+props.account.user.id+"/profile"} component={Profile} />
                                <Route path={"/user/id="+props.account.user.id+"/history"} component={History} />
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
