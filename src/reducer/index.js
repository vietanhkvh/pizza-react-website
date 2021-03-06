import {combineReducers} from 'redux'
import AccountReducer from './AccountReducer'
import {ADD_CART, DELETE_CART, UPDATE_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, GET_NUMBER_CART, GET_ALL_PRODUCT} from '../actions'

import product1 from '../images/product-1.jpg'
import product2 from '../images/product-2.jpg'
import product3 from '../images/product-3.jpg'

import sweet1 from '../images/sweet3.jpg'
import sweet2 from '../images/sweet-2.jpg'
import sweet3 from '../images/sweet-3.jpg'

const initProductCart={
    numberCart: 0,
    Carts: [],//item trong gio
    _pizza:[//pizza
        {
            id: 'p1',
            img: product1,
            alt:'Pizza',
            name: 'Supreme Pizza',
            desc: 'marinara saurce, basil, italian saugage, roma tomatoes, olives, pesto',
            price: 19.99,
            button:'Add to Card',
        },
        {
            id:'p2',
            img: product2,
            alt:'Pizza',
            name: 'Supreme Pizza',
            desc: 'marinara saurce, basil, italian saugage, roma tomatoes, olives, pesto',
            price: 16.99,
            button:'Add to Card',
        },
        {
            id: 'p3',
            img: product3,
            alt:'Pizza',
            name: 'Supreme Pizza',
            desc: 'marinara saurce, basil, italian saugage, roma tomatoes, olives, pesto',
            price: 14.99,
            button:'Add to Card',
        }
    ],//item se doi lay tu api

    _sweet:[
        {
            id:'s1',
            img: sweet2,
            alt:'Donuts',
            name: 'Doughlicous',
            desc: 'marinara saurce, basil, italian saugage, roma tomatoes, olives, pesto',
            price: 19.99,
            button:'Add to Card',
        },
        {
            id:'s2',
            img: sweet3,
            alt:'Ice Cream',
            name: 'Caramel',
            desc: 'marinara saurce, basil, italian saugage, roma tomatoes, olives, pesto',
            price: 16.99,
            button:'Add to Card',
        },
        {
            id:'s3',
            img: sweet1,
            alt:'Brownie',
            name: 'Brownie Bunch',
            desc: 'marinara saurce, basil, italian saugage, roma tomatoes, olives, pesto',
            price: 14.99,
            button:'Add to Card',
        }
    ]
}

const cartReducer=(state=initProductCart, action)=>{
    switch(action.type){
        case GET_ALL_PRODUCT:
            return{
                ...state,
            }
        case GET_NUMBER_CART:
            return{
                ...state,
            }
        case ADD_CART:
            if(state.numberCart==0){
                let cart={
                    id:action.payload.id,
                    quantity: 1,
                    img:action.payload.img,
                    name:action.payload.name,
                    price:action.payload.price
                }
                state.Carts.push(cart)
            }
            else{
                let check=false;
                state.Carts.map((item,key)=>{
                    if(item.id==action.payload.id){
                        state.Carts[key].quantity++;
                        check=true;
                    }
                });
                if(!check){
                    let _cart={
                        id:action.payload.id,
                        quantity: 1,
                        img:action.payload.img,
                        name:action.payload.name,
                        price:action.payload.price
                    }
                    state.Carts.push(_cart)
                }
            }
            return {
                ...state,
                numberCart:state.numberCart+1,
            }
        case INCREASE_QUANTITY:
            console.log('reducer:'+state.Carts[action.payload].quantity)
            return{
                ...state,
                numberCart: state.numberCart+1,
                Carts:{
                    ...state.Carts,
                    [action.payload]:{
                        ...state.Carts[action.payload],
                        quantity: state.Carts[action.payload].quantity + 1,
                    }
                }
            }
        case DECREASE_QUANTITY:
            let quantity= state.Carts[action.payload].quantity;
            if(quantity>1){
                return{
                    ...state,
                    numberCart: state.numberCart - 1,
                    Carts: {
                        ...state.Carts,
                        [action.payload]: {
                             ...state.Carts[action.payload],
                             quantity: state.Carts[action.payload].quantity - 1,
                        },
                    },
                }
            }
            return state; // if not changed return unmutated state
        case DELETE_CART:
            let _quantity= state.Carts[action.payload].quantity;
            return{
                ...state,
                numberCart:state.numberCart - _quantity,
                Carts: state.Carts.filter(item=>{
                    return item.id!=state.Carts[action.payload].id
                })
            }
        default :
            return {
                ...state
            };
    }
}

export default combineReducers({
    carts: cartReducer ,
    accounts: AccountReducer,
})