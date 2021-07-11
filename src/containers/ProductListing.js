import { connect } from "react-redux"
import ProductListingComponent from "../components/ProductListingComponent"
import { setProducts, fetchProducts } from "../redux/actions/actions"

const mapToDispatch = (dispatch) => {
    return {
        setProducts: (products) => dispatch(setProducts(products)),
        fetchProducts: () => fetchProducts(dispatch)
    }
}

export const ProductListing = connect(null, mapToDispatch)(ProductListingComponent)