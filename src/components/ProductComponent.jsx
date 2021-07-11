import { Link } from "react-router-dom";

export default function ProductComponent({product}){
    const {id, title, price, category, image}= product;

    return (
        <>
        {
            product ?

        <div className="col-md-3 " style={{marginBottom:"10px"}}>
<Link to={`/product-details/${id}`} >

<div className="card " style={{width: "18rem"}}>
<img  className="card-img-top" src={image} alt={title} style={{height:"200px"}}/>
<div className="card-body">
  <h5 className="card-title">{title}</h5>
  <h3 className="card-text">{price }$</h3>
  
</div>
</div>
</Link>
</div>
:
<h1>No products</h1>
        }

        </>
    )
}