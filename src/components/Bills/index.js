import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios';
import './style.css'
import { FaRegCheckSquare, FaRegEdit } from "react-icons/fa"
import { EditOutlined, CheckOutlined } from '@ant-design/icons';
import { Button, Space, Table, Image, Badge } from 'antd';

const Bills = () => {
    const [bills, setBills] = useState([]);
    var billDetail= [];
    useEffect(async () => {
        const url = "https://pizza-toryo.herokuapp.com/api/bill";
        const response = await fetch(url);
        const data = await response.json();
        setBills(data.data)
    }, [])

    const handleCompleted =
        async (idBill) => {
            let result = await fetch(`https://pizza-toryo.herokuapp.com/api/bill/${idBill}?note=completed`, {
                method: "PUT",
                body: null,
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": '*/*'
                }
            })
            result = await result.json();
            console.log("result: " + result.data);
            if (result.data != null) {
                alert("Change completed!")
                const url = "https://pizza-toryo.herokuapp.com/api/bill";
                const response = await fetch(url);
                const data = await response.json();
                setBills(data.data)
            }
            else {
                alert("Can't change!")
            }

            console.log("handleComplete at: " + idBill)
        }
    const columns = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: 'Date', dataIndex: 'date', key: 'date' },
        { title: 'Payment($)', dataIndex: 'prices', key: 'prices' },
        { title: 'User id', dataIndex: 'id', key: 'id', render: (id, raw) => { if (!raw.user) { return '---' } return raw.user.id; } },
        { title: 'Address', dataIndex: 'address', key: 'address', render: (id, raw) => { if (!raw.user) { return '---' } return raw.user.address } },
        { title: 'Phone number', dataIndex: 'phoneNumber', key: 'phoneNumber', render: (id, raw) => { if (!raw.user) { return '---' } return raw.user.phone } },
        {
            title: 'Status', dataIndex: 'note', key: 'note',
            render: (id, raw) => raw.note === "completed" ?
                <span><Badge status="success" />{raw.note}</span> : <span><Badge color="yellow" status="processing" />{raw.note}</span>
        },
        {
            title:'Action',
            key: 'operation', render: (id, raw) =>
                raw.note === "created" ?
                    <Space>
                        <Button type="primary" icon={<CheckOutlined />} style={{ backgroundColor: "darkgreen" }} shape="round" onClick={() => handleCompleted(raw.id)}>
                        </Button>
                        <Button type="primary" icon={<EditOutlined />} style={{ backgroundColor: "goldenrod" }} shape="round">
                        </Button>
                    </Space>
                    : null
        },
    ];
    // const getBillDetail=async () =>{
    //     bills.forEach(bill => {
    //         fetch(`https://pizza-toryo.herokuapp.com/api/bill_detail/bill/${bill.id}`)
    //         .then(res=>res.json())
    //         .then(
    //             (result)=>{
    //                 for(let item of result){
    //                     billDetail.push(item)
    //                 }
    //             }
    //         )   
    //     });
    // }
    return (
        <Table
            columns={columns}
            dataSource={bills}
            pagination={{ pageSize: 7 }}
            scroll={{ y: 400 }}
        />
    )

}

export default Bills

