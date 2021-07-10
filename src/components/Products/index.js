import React, { Component } from 'react'
import { actFetchProductsRequest, AddCart } from '../../actions'
import { connect } from 'react-redux';
import { notification } from 'antd';
import "./notification.less";
import {
    ProductsContainer,
    ProductHeading,
    ProductWrapper,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductTitle,
    ProductDesc,
    ProductPrice,
    ProductButton
} from './ProductsElements'
const Products = (props) => {
    const openNotification = (product) => {
        notification.open({
            message: 'NEW ITEM IN CART!',
            description:
                'Success! You just add a product to cart!',
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
        props.AddToCart(product);
    }
    return (
        <ProductsContainer>
            <ProductHeading>{props.heading}</ProductHeading>
            <ProductWrapper>
                {props.data.map((product, index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImg src={product.image} />
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductPrice>{product.price}$</ProductPrice>
                                <ProductButton
                                    onClick={
                                         () => 
                                        openNotification(product)
                                    }
                                >
                                    Add to cart
                                </ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    )
                })}
            </ProductWrapper>
        </ProductsContainer>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        AddToCart: product => dispatch(AddCart(product))
    }
}

export default connect(null, mapDispatchToProps)(Products)
