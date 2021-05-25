import React from 'react'
import { connect } from "react-redux";
import {IncreaseQuantity,DecreaseQuantity,DeleteCart} from '../../actions';
import EmptyCart from '../../components/Cart/EmptyCart'
const Orderpage = ({carts,IncreaseQuantity,DecreaseQuantity,DeleteCart}) => {
    let ListCart=[];
    let TotalCart=0;
    Object.keys(carts).forEach(function(item){
        TotalCart+=carts[item].quantity * carts[item].price;
        ListCart.push(carts[item]);
    });
    function TotalPrice(price,tonggia){
        return Number(price * tonggia).toLocaleString('en-US');
    }
    {console.log(ListCart)}
    return (
        // {Cart}
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
                                    <td><img src={item.img} style={{ width: '100px', height: '80px' }} /></td>
                                    <td>${item.price}</td>
                                    <td>
                                        <span className="btn btn-primary" style={{ margin: '2px' }}onClick={()=>DecreaseQuantity(key)}>-</span>
                                        {console.log('key: '+key)}
                                        <span className="btn btn-info">{item.quantity}</span>
                                        {console.log('quantity: '+item.quantity)}
                                        <span className="btn btn-primary" style={{ margin: '2px' }}onClick={()=>IncreaseQuantity(key)}>+</span>
                                    </td>
                                    <td>{ TotalPrice(item.price,item.quantity)} $</td>
                                    <td><i className="badge badge-danger" onClick={()=>DeleteCart(key)}>X</i></td>
                                </tr>
                            )
                        })

                    }
                    <tr>
                    <td colSpan="5">Total Carts</td>
                    <td>{Number(TotalCart).toLocaleString('en-US')} $</td>
                </tr>
                </tbody>

            </table>
        </div>
    </div>
    )
  
}
const mapStateToProps = state =>{
      return{
          carts: state.carts.Carts
      }
}
const mapDispatchToProps= dispatch=>{
    return{

    }
}
export default connect(mapStateToProps,{IncreaseQuantity,DecreaseQuantity,DeleteCart})(Orderpage)
