import React from 'react'
import axios from 'axios';
import Products from '../../../components/Products';
class MenuDesserts extends React.Component {
    state = {
        products:[]
    }
    componentDidMount() {
        axios.get(`https://pizza-toryo.herokuapp.com/api/product/type/2`)
            .then(res => {
                const products = res.data.data;
                this.setState({ products });
            })
            .catch(error => console.log(error));
    }
    render(){
        return (
            <>
                <Products heading="Choose your favorite" data={this.state.products} />
            </>
        )
    }
}

export default MenuDesserts
