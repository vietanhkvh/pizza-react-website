import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { IncreaseQuantity, DecreaseQuantity, DeleteCart } from '../../actions';
const Orderpage = ({ carts,account, IncreaseQuantity, DecreaseQuantity, DeleteCart }) => {
    let ListCart = [];
    let TotalCart = 0;
    Object.keys(carts).forEach(function (item) {
        TotalCart += carts[item].quantity * carts[item].price;
        ListCart.push(carts[item]);
    });
    function TotalPrice(price, tonggia) {
        return Number(price * tonggia).toLocaleString('en-US');
    }
    { console.log(ListCart) }
    var url="/order-cart";
    useEffect(()=>{
        localStorage.getItem("accessToken")==true?
        url="/product-finish" : url='/order-cart'
    })
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
                            ListCart.map((item, key) => {
                                return (
                                    <tr key={key}>

                                        <td>{item.name}</td>
                                        <td><img src={item.image} style={{ width: '100px', height: '80px' }} /></td>
                                        <td>${item.price}</td>
                                        <td>
                                            <span className="btn btn-primary" style={{ margin: '2px' }} onClick={() => DecreaseQuantity(key)}>-</span>
                                            {console.log('key: ' + key)}
                                            <span className="btn btn-info">{item.quantity}</span>
                                            {console.log('quantity: ' + item.quantity)}
                                            <span className="btn btn-primary" style={{ margin: '2px' }} onClick={() => IncreaseQuantity(key)}>+</span>
                                        </td>
                                        <td>{TotalPrice(item.price, item.quantity)} $</td>
                                        <td><i className="badge badge-danger" onClick={() => DeleteCart(key)}>X</i></td>
                                    </tr>
                                )
                            })

                        }
                        <tr>
                            {/* <td colSpan="5">Total Carts</td> */}
                            {/* <td><button className="btn btn-primary"
                                style={{
                                    backgroundColor: "#e31837",
                                    color: "white",
                                    width: "100%",
                                    padding: "15p",
                                    margin: "10 2",
                                    border: "none",
                                    cursor: "pointer",
                                    fontSize: "1em",
                                }}> {TotalCart==0? 0 : "CHECKOUT    "+Number(TotalCart).toLocaleString('en-US')} $
                                </button>
                            </td> */}
                        </tr>
                    </tbody>
                </table>
                <Link to={url}
                        style={{
                            color: "white",
                            cursor: "pointer",
                            textDecoration: "none"
                        }}>
                <button className="btn btn-primary"
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
                    }}> {TotalCart == 0 ? 0 : ("CHECKOUT " + Number(TotalCart).toLocaleString('en-US'))
                    }$
                </button>
                </Link>
            </div>
        </div>
    )

}
const mapStateToProps = state => {
    return {
        carts: state.carts.Carts,
        account: state.accounts
    }
}
export default connect(mapStateToProps, { IncreaseQuantity, DecreaseQuantity, DeleteCart })(Orderpage)
