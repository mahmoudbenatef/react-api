import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    useParams
  } from "react-router-dom";
import { removeSelectedProduct, selectedProduct } from "../redux/actions/actions";
  
export default function ProductDetailsComponent({getProduct}){
    const {id} = useParams();
    const product = useSelector(state=> state.selectedProduct)
    
    
    const dispatch = useDispatch()

    console.log(id);
    useEffect(()=>{
          getProduct(id)
        //   const {data:product} =  await axios.get( `https://fakestoreapi.com/products/${id}`)
        //   console.log(product);
        //   dispatch(selectedProduct(product))
        // }
        // getPrgetCurrentProductoduct()
        return ()=> dispatch(removeSelectedProduct())

    },[])
    return (
        <>
        {

            product?
        <div className={""}>

<div className="card " style={{width: "18rem"}}>
<img  className="card-img-top" src={product.image} alt={product.title} style={{height:"200px"}}/>
<div className="card-body">
  <h5 className="card-title">{product.title}</h5>
  <h3 className="card-text">{product.price }$</h3>
  
</div>
</div>
                </div> 
                :
                <h1>loading</h1>

}
        </>
    )
}