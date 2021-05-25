import React,{useState} from 'react'
import Feature from '../../components/Feature';
import Hero from '../../components/Hero';
import Products from '../../components/Products';
import Footer from '../../components/Footer';
import { productsData, productsDataSweet } from '../../components/Products/data';
const Mainpage = () => {
    return (
        <>
            <Hero />
            <Products heading="Choose your favorite" data={productsData} />
            <Feature />
            <Products heading="Choose your favorite" data={productsDataSweet} />
            <Footer />
        </>
    )
}

export default Mainpage
