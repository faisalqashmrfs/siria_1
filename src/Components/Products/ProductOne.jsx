import React from 'react'
import './Product.css';
import { useNavigate } from "react-router-dom";
function ProductOne({productone}) {
    const navigate = useNavigate();
    const _id= productone.name;
    const idstring=(_id)=>{
        return String(_id).toLowerCase().split(" ").join("")
      }
   
   
    const handleToDetailes = () => {
      navigate( `/ProductDetailsPage/${rootId} `, {
        state: {
          item: productone
         
        }
      });
    }
    const rootId = idstring(_id);
   console.log(rootId)
  return (
   <li>
    <div className="product-container">
      <img src={productone.imageUrl} alt={productone.name} />
      <div className="image-back" style={{ backgroundImage: `url(${productone.imgback})` }}></div>
    </div>
    <h2 className="product-name">{productone.name}</h2>
   
    <button onClick={handleToDetailes}  className="detailes-but">more details <span className="bottom-arrow"></span></button>

  </li>
  )
}

export default ProductOne