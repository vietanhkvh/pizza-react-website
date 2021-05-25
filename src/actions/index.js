import callApi from '../api'
export const INCREASE_QUANTITY="INCREASE_QUANTITY"
export const DECREASE_QUANTITY="DECREASE_QUANTITY"
export const GET_ALL_PRODUCT="GET_ALL_PRODUCT"
export const GET_NUMBER_CART="GET_NUMBER_CART"
export const ADD_CART="ADD_CART"
export const DELETE_CART="DELETE_CART"
export const UPDATE_CART="UPDATE_CART"

export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('/products', 'GET', null).then(res => {
           
            dispatch(GetAllProduct(res.data));
        });
    }
}

/*GET_ALL_PRODUCT*/
export function GetAllProduct(payload){
    return{
        type: GET_ALL_PRODUCT,
        payload
    }
}
// GET_NUMBER_CART
export function GetNumberCart(){
    return{
        type: GET_NUMBER_CART,
    }
}
// ADD_CART
export function AddCart(payload){
    return{
        type: ADD_CART,
        payload
    }
}
// DELETE_CART
export function DeleteCart(payload){
    return{
        type: DELETE_CART,
        payload
    }
}
// UPDATE_CART
export function UpdateCart(payload){
    return{
        type: UPDATE_CART,
        payload
    }
}
// INCREASE_QUANTITY
export function IncreaseQuantity(payload){
    console.log('action: '+payload)
    return{
        type: INCREASE_QUANTITY,
        payload
    }
}
// DECREASE_QUANTITY
export function DecreaseQuantity(payload){
    return{
        type: DECREASE_QUANTITY,
        payload
    }
}