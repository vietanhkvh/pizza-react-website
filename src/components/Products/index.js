import React, { Component } from 'react'
import { actFetchProductsRequest, AddCart } from '../../actions'
import { connect } from 'react-redux';
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

    return (
        // <ProductsContainer>
        //     <ProductHeading>{props.heading}</ProductHeading>
        //     <ProductWrapper>
        //         {props.data.map((product, index) => {
        //             return (
        //                 <ProductCard key={index}>
        //                     <ProductImg src={product.img} alt={product.alt} />
        //                     <ProductInfo>
        //                         <ProductTitle>{product.name}</ProductTitle>
        //                         <ProductDesc>{product.desc}</ProductDesc>
        //                         <ProductPrice>{product.price}</ProductPrice>
        //                         <ProductButton onClick={() => props.AddToCart(product)}>{product.button}</ProductButton>
        //                     </ProductInfo>
        //                 </ProductCard>
        //             )
        //         })}
        //     </ProductWrapper>
        // </ProductsContainer>

        <ProductsContainer>
        <ProductHeading>{props.heading}</ProductHeading>
        <ProductWrapper>
            {props.data.map((product, index) => {
                return (
                    <ProductCard key={index}>
                        <ProductImg src={product.image}/>
                        <ProductInfo>
                            <ProductTitle>{product.name}</ProductTitle>
                            <ProductPrice>{product.price}$</ProductPrice>
                            <ProductButton onClick={() => props.AddToCart(product)}>Add to cart</ProductButton>
                        </ProductInfo>
                    </ProductCard>
                )
            })}
        </ProductWrapper>
    </ProductsContainer>
    )
}
// const mapStateToProps = state => {
//     return {
//         _products: state._todoProduct,
//     };
// }


function mapDispatchToProps(dispatch) {
    return {
        // actFetchProductsRequest:()=>dispatch(actFetchProductsRequest()),
        AddToCart: product => dispatch(AddCart(product))
    }
}

export default connect(null, mapDispatchToProps)(Products)
