import React, { useState, useEffect } from 'react'
import { Table, Tabs, Image, Button, Space, Popconfirm, Form, InputNumber, Input, Modal, Select, Upload } from 'antd'
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import './style.css'
import axios from 'axios';

const { TabPane } = Tabs

const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{
                        margin: 0,
                    }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};



const Products = () => {
    //modal form add product
    const [visibleModal, setVisibleModal] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const [products1, setProducts1] = useState([]);
    const [products2, setProducts2] = useState([]);
    const [form] = Form.useForm();
    const [form2] = Form.useForm();
    const [editingID, setEditingID] = useState('');
    const isEditing = (record) => record.id === editingID;

    //state preview image product upload
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');

    //state of a product:
    const [price, setPrice] = useState('');
    const [type, setType] = useState('');
    const [image, setImage] = useState(null);
    const [nameProduct, setNameProduct] = useState('');


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

    const edit = (record) => {
        form.setFieldsValue({
            price: '',
            ...record,
        });
        setEditingID(record.id);
        console.log("record id:" + record.type.id);
    };

    const cancel = () => {
        setEditingID('');
    };

    const updateProduct = (record) => {
        let result = fetch(`https://pizza-toryo.herokuapp.com/api/product/${record.id}?price=${record.price}&type_id=${record.type.id}`, {
            method: "PUT",
            body: null,
            headers: {
                "Content-Type": 'application/json',
                "Accept": '*/*'
            }
        })
        result = result.json();
        console.log("result: " + result.data);
        if (result.data != null) {
            alert("Change successfull!")
        }
        else {
            alert("Change fail!")
        }
    }

    const save = async (record) => {
        try {
            const id = record.id;
            const typeID = record.type.id;
            const row = await form.validateFields();
            let newProducts = [];
            typeID == 1 ? newProducts = [...products1] : newProducts = [...products2];
            const index = newProducts.findIndex((item) => id === item.id);
            if (index > -1) {
                const item = newProducts[index];
                newProducts.splice(index, 1, { ...item, ...row });
                typeID == 1 ? setProducts1(newProducts) : setProducts2(newProducts);
                setEditingID('');
                updateProduct(newProducts[index]);
            } else {
                newProducts.push(row);
                typeID == 1 ? setProducts1(newProducts) : setProducts2(newProducts);
                setEditingID('');
                updateProduct(newProducts[index]);
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const handleDetelePro = (record) => {
        fetch(`https://pizza-toryo.herokuapp.com/api/product/${record.id}`, {
            method: "DELETE",
            body: null,
            headers: {
                "Content-Type": 'application/json',
                "Accept": '*/*'
            }
        }).then(result=>{
            alert("Detele product completed!")
            fetch(`https://pizza-toryo.herokuapp.com/api/product/type/${record.type.id}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        record.type.id === 1 ?
                            setProducts1(result.data)
                            : setProducts2(result.data)
                    }
                )
        }, (err=>{
            alert("Can't delete product!")
        }))

        // result= result.json();
        // if(result.data===null){
        //     alert("Delete product completed!")
        // }
        // else
        //     alert("Can't delete product!")
    }

    const showModal = () => {
        setVisibleModal(true)
    }

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setVisibleModal(false);
            setConfirmLoading(false);
        }, 2000);
        //can them post product api
        console.log("name:" + nameProduct + " type:" + type + " price:" + price + " image:" + image);
        let formData = new FormData();
        formData.append('name', nameProduct);
        formData.append('price', price);
        formData.append('type_id', type);
        formData.append('image', image);
        console.log(Array.from(formData));
        fetch(`https://pizza-toryo.herokuapp.com/api/product`, {
            method: 'POST',
            headers: {
                "Accept": '*/*',
                "Authorization": "Client-ID {{clientId}}"
            },
            body: formData,
        }).then((res) => {
            alert("Add product successfull!")
            fetch(`https://pizza-toryo.herokuapp.com/api/product/type/${type}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        type === 1 ?
                            setProducts1(result.data)
                            : setProducts2(result.data)
                    }
                )

        }, (err) => {
            alert("Can't add product!")
        }
        )

    }

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisibleModal(false);
    };

    const { Option } = Select;
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };

    const onReset = () => {
        form2.resetFields();
    };

    const columns = [
        { title: 'ID', dataIndex: 'id', key: 'id', },
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Price', dataIndex: 'price', key: 'price', editable: true },
        { title: 'Image', key: 'image', render: (id, raw) => <Image width={50} src={raw.image} /> },
        {
            title: "Action", key: 'action',
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ?
                    (<span>
                        <Space>
                            <a
                                href="javascript:;"
                                onClick={() => save(record)}
                                style={{
                                    marginRight: 8,
                                }}
                            >
                                Save
                            </a>
                            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                                <a>Cancel</a>
                            </Popconfirm>
                        </Space>
                    </span>
                    )
                    :
                    (<Space>
                        <Button icon={<EditOutlined />} style={{ backgroundColor: "goldenrod" }} shape="round" disabled={editingID !== ''} onClick={() => edit(record)}>
                        </Button>
                        <Popconfirm title="Sure to delete?" onConfirm={() => handleDetelePro(record)} >
                            <Button icon={<DeleteOutlined />} style={{ backgroundColor: "darkred" }} shape="round">
                            </Button>
                        </Popconfirm>
                    </Space>
                    )
            }
        }
    ]
    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.dataIndex === 'price' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    const handleCancelIMG = () => setPreviewVisible(false);
    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewVisible(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
    const handleImage1 = (e) => {
        // switch (info.file.status) {
        //     case "uploading":
        //         setImage(null);
        //         break;
        //     case "done":
        //         setImage(info.file);
        //         break;
        //     default:
        //         // error or removed
        //         setImage(null);
        // }
        let file = e.target.files[0];
        console.log(file);
        setImage(file);

    }
    const handleImg2 = (info) => {
        switch (info.file.status) {
            case "uploading":
                setImage(null);
                break;
            case "done":
                setImage(info.fileList[0]);
                break;
            default:
                // error or removed
                setImage(null);
        }
        console.log(info.fileList[0])
    }
    const dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 0);
    };
    return (
        <>
            <Tabs defaultActiveKey="piz">
                <TabPane className="tab-name" tab="Pizza" key="piz">
                    <Form className="pizza-list" form={form} component={false}>
                        <Button
                            onClick={showModal}
                            style={{
                                backgroundColor: "goldenrod",
                                margin: 10,
                            }}
                        >
                            Add product
                        </Button>
                        <Modal
                            title="Add a product"
                            visible={visibleModal}
                            onOk={handleOk}
                            confirmLoading={confirmLoading}
                            onCancel={handleCancel}
                        >
                            <Form className="form-add-product" {...layout} form={form2} name="control-hooks">
                                <Form.Item
                                    name="typeID"
                                    label="Type"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >

                                    <Select
                                        placeholder="Select a option and change input text above"
                                        allowClear
                                        onChange={(value) => {
                                            setType(value)
                                        }}
                                    >
                                        <Option value="1">Pizza</Option>
                                        <Option value="2">Dessert</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    name="name"
                                    label="Name"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input type="text" onChange={(e) => setNameProduct(e.target.value)} />
                                </Form.Item>
                                <Form.Item
                                    name="price"
                                    label="Price($)"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input type="number" onChange={(e) => setPrice(e.target.value)} />
                                </Form.Item>

                                <Form.Item
                                    name="image"
                                    label="Image"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input type="file" name="file" onChange={(e) => handleImage1(e)} ></Input>
                                    <Modal
                                        visible={previewVisible}
                                        title={previewTitle}
                                        footer={null}
                                        onCancel={handleCancelIMG}
                                    >
                                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                    </Modal>
                                </Form.Item>

                                <Form.Item {...tailLayout}>
                                    <Button htmlType="button" onClick={onReset}>
                                        Reset
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Modal>
                        <Table
                            components={{
                                body: {
                                    cell: EditableCell,
                                },
                            }}
                            bordered
                            dataSource={products1}
                            columns={mergedColumns}
                            rowClassName="editable-row"
                            pagination={{
                                onChange: cancel,
                                pageSize: 5
                            }}
                        />
                    </Form>
                </TabPane>
                <TabPane className="tab-name" tab="Dessert" key="des">
                    <Form form={form} component={false}>
                        <Table
                            components={{
                                body: {
                                    cell: EditableCell,
                                },
                            }}
                            bordered
                            dataSource={products2}
                            columns={mergedColumns}
                            rowClassName="editable-row"
                            pagination={{
                                onChange: cancel,
                                pageSize: 5
                            }}
                        />
                    </Form>
                </TabPane>
            </Tabs>
        </>
    )

}

export default Products
