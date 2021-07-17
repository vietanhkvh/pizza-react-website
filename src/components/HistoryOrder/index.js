import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Button, Space, Table, Image, Badge, Steps } from 'antd';
import { StopOutlined, CheckOutlined } from '@ant-design/icons';
const History = (props) => {
    const [bills, setBills] = useState([]);
    const [userId, setuserID] = useState(props.account.user.id);
    useEffect(async () => {
        const url = "https://pizza-toryo.herokuapp.com/api/bill/user/" + userId;
        const response = await fetch(url);
        const data = await response.json();
        setBills(data.data)
    }, [])
    const handleCancel = async (bill) => {
        let status = "canceled";
        let result;

        result = await fetch(`https://pizza-toryo.herokuapp.com/api/bill/${bill.id}?note=${status}`, {
            method: "PUT",
            body: null,
            headers: {
                "Content-Type": 'application/json',
                "Accept": '*/*'
            }
        })
        result = await result.json();

        if (result.data != null) {
            alert("Cancel completed!")
            const url = "https://pizza-toryo.herokuapp.com/api/bill/user/" + userId;
            const response = await fetch(url);
            const data = await response.json();
            setBills(data.data)
        }
        else {
            alert("Can't cancel!")
        }

    }
    const handleCompleted =
        async (bill) => {
            let success = "success";
            let result;

            result = await fetch(`https://pizza-toryo.herokuapp.com/api/bill/${bill.id}?note=${success}`, {
                method: "PUT",
                body: null,
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": '*/*'
                }
            })
            result = await result.json();

            if (result.data != null) {
                alert("Change completed!")
                const url = "https://pizza-toryo.herokuapp.com/api/bill/user/" + userId;
                const response = await fetch(url);
                const data = await response.json();
                setBills(data.data)
            }
            else {
                alert("Can't change!")
            }

            console.log("handleComplete at: " + bill.id)
        }
    const columns = [
        { title: 'Date', dataIndex: 'date', key: 'date' },
        { title: 'Payment($)', dataIndex: 'prices', key: 'prices' },
        {
            title: 'Status', dataIndex: 'note', key: 'note',
        },
        {
            title: 'Cancel',
            key: 'operation', render: (id, raw) =>
                raw.note === "waiting" ?
                    <Space>
                        <Button type="primary" icon={<StopOutlined />} style={{ backgroundColor: "darkred" }} shape="round" onClick={() => handleCancel(raw)}>
                        </Button>
                    </Space>
                    : <p>No action now</p>
        },
        {
            title: 'Completed',
            key: 'operation', render: (id, raw) =>
                raw.note === "delivering" ?
                    <Space>
                        <Button type="primary" icon={<CheckOutlined />} style={{ backgroundColor: "darkgreen" }} shape="round" onClick={() => handleCompleted(raw)}>
                        </Button>
                    </Space>
                    : <p>No action now</p>
        },
    ];
    const handleRefresh = async () => {
        const url = "https://pizza-toryo.herokuapp.com/api/bill/user/" + userId;
        const response = await fetch(url);
        const data = await response.json();
        setBills(data.data)
    }
    return (
        <>
            <Button
                onClick={() => handleRefresh()}
                style={{
                    backgroundColor: "goldenrod",
                    margin: 10,
                }}
            >
                Refresh
            </Button>
            <Table
                columns={columns}
                dataSource={bills}
                pagination={{ pageSize: 7 }}
                scroll={{ y: 400 }}
            />
        </>
        // <div className="row">
        //     <div className="col-md-12">
        //         <table className="table">
        //             <thead>
        //                 <tr>
        //                     <th>Date</th>
        //                     <th>Total Price</th>
        //                     {/* <th>Quantity</th> */}
        //                     <th>Status</th>
        //                     <th></th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {
        //                     this.state.billList.map((bill, key) => {
        //                         return (
        //                             <tr key={key}>

        //                                 <td>{bill.date}</td>
        //                                 <td>${bill.prices}</td>
        //                                 <td>{bill.note}</td>

        //                             </tr>
        //                         )
        //                     })

        //                 }
        //             </tbody>
        //         </table>
        //     </div>
        // </div>
    )
}
const mapStateToProps = state => {
    return {
        account: state.accounts
    }
}
export default connect(mapStateToProps)(History)
