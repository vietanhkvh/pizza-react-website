import React from 'react'
import { connect } from 'react-redux'
const CheckOut = (props) => {
    let ListCart = [];
    let TotalCart = 0;
    let user = props.account.user;
    Object.keys(props.cart.Carts).forEach(function (item) {
        TotalCart += props.cart.Carts[item].quantity * props.cart.Carts[item].price;
        ListCart.push(props.cart.Carts[item]);
    });
    function TotalPrice(price, tonggia) {
        return Number(price * tonggia).toLocaleString('en-US');
    }
    console.log("totalcart:" + TotalCart)
    const handlePostBill = async () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = dd + '-' + mm + '-' + yyyy;
        let bill = {
            user_id: user.id,
            date: today,
            prices: TotalCart,
            note: "created"
        }
        let resultB = await fetch(`https://pizza-toryo.herokuapp.com/api/bill`, {
            method: 'POST',
            body: JSON.stringify(bill),
            headers: {
                "Content-Type": 'application/json',
                "Accept": '*/*'
            }
        })
        resultB = await resultB.json();
        let resultBD;
        if (resultB.data[0].id !== null) {
            Object.keys(props.cart.Carts).forEach(function (item) {
                let billDetail = {
                    bill_id: resultB.data[0].id,
                    product_id: props.cart.Carts[item].id,
                    prices: props.cart.Carts[item].price,
                    quantity: props.cart.Carts[item].quantity,
                }

                resultBD = fetch(`https://pizza-toryo.herokuapp.com/api/bill_detail`, {
                    method: 'POST',
                    body: JSON.stringify(billDetail),
                    headers: {
                        "Content-Type": 'application/json',
                        "Accept": '*/*'
                    }
                })
            });
        }

    }
    return (
        <div className="row">
            <div className="col-md-12">
                <table className="table">
                    <thead>
                        <tr>
                            <th style={{ fontSize: "2rem", fontWeight: "lighter" }}>Your detail shipment</th>
                            <th style={{ fontSize: "2rem", fontWeight: "lighter" }}>Your Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Customer's Information</th>
                                            <th>Order information</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p>Name*</p>
                                                <input type="text" id="name" className="form-control" placeholder="Your name" defaultValue={props.account.user.name} required />
                                                <br />
                                                <p>Email</p>
                                                <input type="email" id="email" className="form-control" placeholder="Email" defaultValue={props.account.user.email} />
                                                <br />
                                                <p>Phone*</p>
                                                <input type="text" id="phone" className="form-control" placeholder="Phone" defaultValuealue={props.account.user.phone} required /></td>
                                            <td>
                                                <p>Address*</p>
                                                <input type="text" id="address" className="form-control" placeholder="Address" defaultValue={props.account.user.address} required />
                                                <br />
                                                <p>Note</p>
                                                <input type="text" id="note" className="form-control" placeholder="Note" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td style={{ color: "red", fontSize: "1.5rem" }}>Total:</td>
                                            <td></td>
                                            <td></td>
                                            <td style={{ float: "right", color: "red", fontSize: "1.5rem" }}>{Number(TotalCart).toLocaleString('en-US')}$</td>
                                        </tr>
                                        {console.log("check out")}
                                        {console.log(props.cart.Carts)}
                                        {ListCart.map((item, key) =>
                                            <tr>
                                                <td>{item.quantity}</td>
                                                <td>X</td>
                                                <td>
                                                    <ul style={{ listStyleType: "none" }}>
                                                        <li ><img src={item.image} style={{ width: '100px', height: '80px' }} /></li>
                                                        <li style={{ color: "GrayText" }}>{item.name}</li>
                                                    </ul>
                                                </td>
                                                <td>{TotalPrice(item.price, item.quantity)} $</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <button className="btn btn-primary" onClick={handlePostBill}
                            style={{
                                backgroundColor: "#e31837",
                                color: "white",
                                width: "30%",
                                height: "3.5em",
                                padding: "15p",
                                margin: "10 2",
                                border: "none",
                                cursor: "pointer",
                                fontSize: "1em",
                                float: 'right'
                            }}
                            disabled={user.name == null && user.address == null && user.phone == null ? true : false}
                        > Complete your order
                                        </button>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.carts,
        account: state.accounts
    }
}
export default connect(mapStateToProps)(CheckOut)
