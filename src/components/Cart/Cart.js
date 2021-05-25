import React from 'react'

const Cart = (props) => {
    return (
        <div className="row">
            <div className="col-md-12">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.ListCart.map((item, key) => {
                                return (
                                    <tr key={key}>

                                        <td>{item.name}</td>
                                        <td><img src={item.img} style={{ width: '100px', height: '80px' }} /></td>
                                        <td>${item.price}</td>
                                        <td>
                                            <span className="btn btn-primary" style={{ margin: '2px' }}>-</span>
                                            <span className="btn btn-info">{item.quantity}</span>
                                            <span className="btn btn-primary" style={{ margin: '2px' }}>+</span>
                                        </td>
                                        {/* <td>{ TotalPrice(item.price,item.quantity)} $</td> */}
                                        <td><i className="badge badge-danger">X</i></td>
                                    </tr>
                                )
                            })

                        }
                        {/* <tr>
                        <td colSpan="5">Total Carts</td>
                        <td>{Number(TotalCart).toLocaleString('en-US')} $</td>
                    </tr> */}
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Cart
