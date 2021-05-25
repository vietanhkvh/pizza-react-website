import React from 'react'
import Products from '../../../components/Products';
import {productsDataSweet } from '../../../components/Products/data';
const MenuDesserts = () => {
    return (
        <>
            <Products heading="Choose your favorite" data={productsDataSweet} />
        </>
    )
}

export default MenuDesserts
