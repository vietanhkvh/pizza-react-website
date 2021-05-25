import React from 'react'
import Products from '../../../components/Products';
import { productsData } from '../../../components/Products/data';
const MenuPizzas = () => {
    return (
        <>
        <Products heading="Choose your favorite" data={productsData} />
        </>
    )
}

export default MenuPizzas
