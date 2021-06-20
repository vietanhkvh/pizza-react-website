import React, { useState, useEffect } from 'react'
import { Table, Tabs, Image, Button, Space, Popconfirm } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import './style.css'
const { TabPane } = Tabs
const Products = () => {
    const [products1, setProducts1] = useState([]);
    const [products2, setProducts2] = useState([]);

    useEffect(() => {
        fetch(`https://pizza-toryo.herokuapp.com/api/product/type/1`)
            .then(res => res.json())
            .then(
                (result) => {
                    setProducts1(result.data)
                }
            )
    }, [])
    useEffect(() => {
        fetch(`https://pizza-toryo.herokuapp.com/api/product/type/2`)
            .then(res => res.json())
            .then(
                (result) => {
                    setProducts2(result.data)
                }
            )
    }, [])
    const columns = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Price', dataIndex: 'price', key: 'price' },
        { title: 'Image', key: 'image', render: (id, raw) => <Image width={50} src={raw.image} /> },
        {
            title: "Action", key: 'action',
            render: () =>
                <Space>
                    <Button icon={<EditOutlined />} style={{ backgroundColor: "goldenrod" }} shape="round" >
                    </Button>
                    <Popconfirm title="Sure to delete?" >
                        <Button icon={<DeleteOutlined />} style={{ backgroundColor: "darkred" }} shape="round">
                        </Button>
                    </Popconfirm>
                </Space>
        }
    ]
    return (
        <Tabs defaultActiveKey="">
            <TabPane tab="Pizza" key="piz">
                <Table
                    columns={columns}
                    dataSource={products1}
                    pagination={{ pageSize: 5 }}
                    bordered
                />
            </TabPane>
            <TabPane tab="Dessert" key="des">
                <Table
                    columns={columns}
                    dataSource={products2}
                    pagination={{ pageSize: 5 }}
                />
            </TabPane>
        </Tabs>

    )
}

export default Products
