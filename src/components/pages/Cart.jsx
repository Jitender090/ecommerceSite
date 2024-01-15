import React,{useContext} from 'react'
import { UserContext } from '../UserContext';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import '../style/Cart.css'

import { remove } from '../../Store/cartSlice';
export const Cart = () => {
  // const count = useContext(UserContext);
  // console.log(typeof(count));
  const items=useSelector((state)=>state.cart);
  const dispatch=useDispatch();
  const handleRemove=(id)=>{
dispatch(remove(id));
  }
  console.log("mycartpage",items);
  if (items.length === 0) {
    return (
      <>
       <div className="product-cl1">
            <h1>Product</h1>
            <p>
              <Link className="product-link" to="/">
                Home
              </Link>{" "}
              / Product
            </p>
          </div>

         <div className="empty-box">
          <h3>Cart is Empty!! Add some products in your Cart</h3>
         </div>
          
        
      </>
    );
  }

  
  return (
    <div>
      <div className="product-cl1">
            <h1>Product</h1>
            <p>
              <Link className="product-link" to="/">
                Home
              </Link>{" "}
              / Product
            </p>
          </div>
        <div className="cart-items">
        {items.map((e,index)=>
<p key={index}>{e.category}
{e.price}
<img src={e.image} height='100px' widht='100px'></img> 
<button onClick={()=>handleRemove(e.id)}>Remove</button>
</p>)}
        </div>


      </div>
  )
}