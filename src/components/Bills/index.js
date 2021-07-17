import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios';
import './style.css'
import { FaRegCheckSquare, FaRegEdit } from "react-icons/fa"
import { EditOutlined, CheckOutlined } from '@ant-design/icons';
import { Button, Space, Table, Image, Badge, Steps } from 'antd';

const Bills = () => {
    const [bills, setBills] = useState([]);
    var billDetail = [];
    useEffect(async () => {
        const url = "https://pizza-toryo.herokuapp.com/api/bill";
        const response = await fetch(url);
        const data = await response.json();
        setBills(data.data)
    }, [])

    const handleCompleted =
        async (bill) => {
            let delivering = "delivering";
            let waiting = "waiting";
            let result;

            result = await fetch(`https://pizza-toryo.herokuapp.com/api/bill/${bill.id}?note=${delivering}`, {
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
                const url = "https://pizza-toryo.herokuapp.com/api/bill";
                const response = await fetch(url);
                const data = await response.json();
                setBills(data.data)
            }
            else {
                alert("Can't change!")
            }

            console.log("handleComplete at: " + bill.id)
        }
    const { Step } = Steps;
    const currentStep = (item) => {
        if (item.note === "waiting") return 0
        else if (item.note === "delivering") return 1
        else return 2
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
            render: (id, raw) =>
                // raw.note === "success" ?
                //     <span><Badge status="success" />{raw.note}</span> :


                //     <span><Badge color="yellow" status="processing" />{raw.note}</span>
                <Steps progressDot size="small" current={currentStep(raw)} direction="vertical">
                    <Step title="Waiting" />
                    <Step title="Delivering" />
                    <Step title="Success" />
                </Steps>
        },
        {
            title: 'Action',
            key: 'operation', render: (id, raw) =>
                raw.note === "waiting" ?
                    <Space>
                        <Button type="primary" icon={<CheckOutlined />} style={{ backgroundColor: "darkgreen" }} shape="round" onClick={() => handleCompleted(raw)}>
                        </Button>
                    </Space>
                    : <p>No action now</p>
        },
    ];
    const handleRefresh = async () => {
        const url = "https://pizza-toryo.herokuapp.com/api/bill";
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
    )

}

export default Bills

