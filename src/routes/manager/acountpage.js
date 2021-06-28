import React, { useState, useEffect } from 'react'
import { Table, Button, Space, Popconfirm } from 'antd'
import { EditOutlined, DeleteOutlined, PlusOutlined, UpOutlined } from '@ant-design/icons';
const Account = () => {
    const [admins, setListAdmin] = useState([]);
    useEffect(() => {
        fetch(`https://pizza-toryo.herokuapp.com/api/user`)
            .then(res => res.json())
            .then(result => {
                const temp = result.data.filter(res => res.role === "admin")
                setListAdmin(temp)
            })
    }, [])
    const columns = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: 'User name', dataIndex: 'username', key: 'username' },
        { title: 'Password', dataIndex: 'password', key: 'password' },
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { titel: 'Address', dataIndex: 'address', key: 'address' },
        { title: 'Phone', dataIndex: 'phone', key: 'phone' },
        { title: 'Role', dataIndex: 'role', key: 'role' },
        {
            title: 'Action', key: 'action',
            render: (id, raw) =>
                raw.role !== "admin" ?
                    <Space>
                        <Button type="primary" icon={<UpOutlined />} style={{ backgroundColor: "darkgreen" }} shape="round" >
                        </Button>
                        <Button icon={<EditOutlined />} style={{ backgroundColor: "goldenrod" }} shape="round" >
                        </Button>
                        <Popconfirm title="Sure to delete?"
                        // onConfirm={() => handleDetelePro(record)} 
                        >
                            <Button icon={<DeleteOutlined />} style={{ backgroundColor: "darkred" }} shape="round">
                            </Button>
                        </Popconfirm>
                    </Space>
                    : <Space>
                        <Button icon={<EditOutlined />} style={{ backgroundColor: "goldenrod" }} shape="round" >
                        </Button>
                        <Popconfirm title="Sure to delete?"
                        // onConfirm={() => handleDetelePro(record)} 
                        >
                            <Button icon={<DeleteOutlined />} style={{ backgroundColor: "darkred" }} shape="round">
                            </Button>
                        </Popconfirm>
                    </Space>
        }
    ]
    return (
        <>
            {console.log(admins)}
            <Table
                columns={columns}
                dataSource={admins}
                pagination={{
                    pageSize: 15
                }}
            />
        </>
    )
}

export default Account
