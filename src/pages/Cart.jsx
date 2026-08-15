import {useOutletContext} from "react-router-dom";
import "./../style/Cart.css"
import { useNavigate } from "react-router-dom";

const Cart=()=>{
    const navigate =useNavigate();
    
    const {cartItems}=useOutletContext();
    console.log(cartItems)
    return(
        <div className="cart">
            
            <div className="cart_items">
                {cartItems.length > 0 && cartItems.map((r)=>{
    const a = r;
    const price = (a.defaultPrice || a.price || 0)/100;
    const totalPrice = price * r.quantity;
    

    
    
    return (
        <div key={a.id} className="cart-item">
            <p className="item-name">{a.name}</p>
            <p>Quantity: {r.quantity}</p>
            <p>Total: ₹{totalPrice}</p>
            
            
        </div>
        
    );
})}
{cartItems.length > 0 && (
   <button  className="pay-btn "onClick={()=>navigate("/Checkout")}>
      Proceed to Checkout
   </button>
)}
            </div>
            {cartItems.length===0 &&(
            <div className="cart-info">
                <img  className="img-tag" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"></img>
                <h2 className="cart-title">Your cart is empty</h2>
                <p className="cart-para">You can go to home page to view more restaurants</p>
                

<button
  className="cart-btn"
  onClick={() => navigate("/DeliveryAnimation")}
>
  See Resturant Near You
</button>
            </div>
            )}
        </div>

    )
}

export default Cart;