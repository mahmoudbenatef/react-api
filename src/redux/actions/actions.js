import axios from "axios";
import { ACTIONTYPES } from "../constants/constants";

export const fetchProducts = (dispatch) => {
    console.log("holaaaaaaaaaaa");
    const getProducts = async () => {
        console.log("going to fetshhhhh");
        const { data: products } = await axios.get('https://fakestoreapi.com/products')
        console.log(products);
        dispatch(setProducts(products))
    }
    getProducts()
}
export const getProduct = productId => async (dispatch) => {
    console.log("going to fetshhhhh" + productId);
    const { data: product } = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    console.log(product);
    dispatch(selectedProduct(product))
}

export const setProducts = (products) => ({ type: ACTIONTYPES.SET_PRODUCTS, payload: { products } })
export const selectedProduct = (product) => ({ type: ACTIONTYPES.SELECTED_PRODUCT, payload: { product } })
export const removeSelectedProduct = () => ({ type: ACTIONTYPES.REMOVE_SELECTED_PRODUCT })
export const removeProducts = () => ({ type: ACTIONTYPES.REMOVE_PRODUCTS })