import { connect } from "react-redux"
import ProductComponent from "../components/ProductComponent"
import ProductDetailsComponent from "../components/ProductDetailsComponent"
import ProductListingComponent from "../components/ProductListingComponent"
import { setProducts, fetchProducts, getProduct } from "../redux/actions/actions"

const mapToDispatch = (dispatch) => {
    console.log("dispaaaaaaaaaaaaaaaaaaaaaaaaaaaaaatch");
    return {
        getProduct: (productID) => dispatch(getProduct(productID)),
    }
}

export const ProductDetails = connect(null, mapToDispatch)(ProductDetailsComponent)