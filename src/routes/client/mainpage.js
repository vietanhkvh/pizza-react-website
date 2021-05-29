import React from 'react'
import Feature from '../../components/Feature';
import Hero from '../../components/Hero';
import Products from '../../components/Products';
import Footer from '../../components/Footer';
import axios from 'axios';
class Mainpage extends React.Component {
    state={
        pizzas:[],
        dersserts:[],
    }
    componentDidMount(){
        axios.get(`https://pizza-toryo.herokuapp.com/api/product/type/1`)
        .then(res=>{
            const pizzas= res.data.data;
            this.setState({pizzas:pizzas});
        }).catch(err=>
            console.log(err))
        axios.get(`https://pizza-toryo.herokuapp.com/api/product/type/2`)
        .then(res=>{
            const dersserts= res.data.data;
            this.setState({dersserts: dersserts});
        }).catch(err=>console.log(err))
    }
    render() {
        return (
            <>
                <Hero />
                <Products heading="Choose your favorite" data={this.state.pizzas} />
                <Feature />
                <Products heading="Choose your favorite" data={this.state.dersserts} />
                <Footer />
            </>
        )
    }
}

export default Mainpage
