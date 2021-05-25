import React from 'react'
import emptyCart from '../../images/empty-cart.png'
import {CartDiv,CartImg,CartText,CartSpan,CartButton} from './ItemCartElements'
const EmptyCart = () => {
    return (
        <CartDiv>
            <CartImg src={emptyCart}/>
            <CartText>Your cart is empty</CartText>
            <CartSpan>Let choose some delicious thing from menu</CartSpan>
            <CartButton></CartButton>
        </CartDiv>
    )
}

export default EmptyCart
