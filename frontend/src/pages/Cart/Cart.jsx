import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/storeContext";
import { useNavigate } from "react-router-dom";
const Cart = ({}) => {
  const { cartItems, token, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  const handleCheckout = () => {
    let amount = getTotalCartAmount();
    if(amount > 0){
      navigate("/order");
    }
    else if(!token){
      alert("Please Login/SignUp");
    }
    else{
      alert("Please select some food items first..")
    }
  }  

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div key={index} className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₹{item.price * cartItems[item._id]}</p>
                  <p className="cross" onClick={() => removeFromCart(item._id)}>
                    X
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>₹{getTotalCartAmount() > 0 ? 10 : 0}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{getTotalCartAmount() > 0 ? getTotalCartAmount() + 10 : 0}</b>
            </div>
          </div>
          <button onClick={handleCheckout}>
            Proceed To Checkout
          </button>
        </div>
        <div className="cart-promo">
          <div>
            <p>If you have a promocode, Enter here</p>
            <div className="promo-input">
              <input type="text" placeholder="Promocode" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
