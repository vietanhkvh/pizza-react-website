import React from 'react'
import { Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import History from '../../components/HistoryOrder'
import Profile from '../../components/ProfileUser'
import SideBar from '../../components/Sidebar'
import Sidebar from '../../components/Sidebar'
const UserPage = () => {
        return (
                
                        // <table className="table" style={{
                        //         height: "80vh",
                        //         padding: "0",
                        // }}>
                        //         <td style={{
                        //                 padding: "0",
                        //         }}><Sidebar /></td>
                        //         <td style={{
                        //                 padding: "0",
                        //         }}>
                                       
                        //                 <Switch>
                        //                         <Route path="/user/profile" component={Profile}/>
                        //                         <Route path="/user/history" component={History}/>
                        //               </Switch>
                                     
                        //         </td>
                        // </table>
                        <>
                        <SideBar/>
                        <Profile/>
                        </>
        )
}
export default UserPage
