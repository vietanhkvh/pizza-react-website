import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
class History extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            billList: [],
            user_id: null
        }
    }

    componentDidMount() {
        axios.get(`https://pizza-toryo.herokuapp.com/api/bill/user/` + localStorage.getItem("user_id"))
            .then(res => {
                const billList = res.data.data;
                this.setState({ billList });
                console.log(billList)
            })
            .catch(error => console.log(error));
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Total Price</th>
                                {/* <th>Quantity</th> */}
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.billList.map((bill, key) => {
                                    return (
                                        <tr key={key}>

                                            <td>{bill.date}</td>
                                            <td>${bill.prices}</td>
                                            <td>{bill.note}</td>
                                            
                                        </tr>
                                    )
                                })

                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        account: state.accounts
    }
}
export default (History)
