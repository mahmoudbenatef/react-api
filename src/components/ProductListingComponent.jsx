import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { removeProducts} from "../redux/actions/actions";
import ProductComponent from "./ProductComponent";

export default function ProductListingComponent({setProducts, fetchProducts}){
    const products = useSelector(state => state.allProducts)
    const  dispatch = useDispatch()
    console.log(products);
    useEffect(() => {
         fetchProducts();
        // const getProducts = async ()=>{
        //     const {data:products} = await axios.get('https://fakestoreapi.com/products')
        //     setProducts(products)
        // }
        // getProducts();
        return  () => {  
            dispatch(removeProducts())
        }
    }, [])
    return (

        <>
        
        <div className={"m-5"} >
<div className="row">

                {products && products.length>0 ?
                products.map(product => <ProductComponent key={product.id} product={product}/>
                 
            )
        :
        <h1>Loading....</h1>
        }
</div>
             </div> 
        </>
    )
}