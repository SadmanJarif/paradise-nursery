import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './App.css';

// Paradise Nursery — CartItem (shopping cart view)
// Shows each plant in the cart, its price, quantity with + / - buttons,
// the subtotal for each item, a delete button, the cart total, and a
// "Coming Soon" checkout button.
function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckoutShopping = () => {
    alert('Checkout is coming soon! Thank you for shopping at Paradise Nursery.');
  };

  const calculateTotalAmount = () =>
    cartItems.reduce((total, item) => total + Number(item.cost) * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <p>Total items in cart: {totalQuantity}</p>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Add some plants from the list below!</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.name} className="cart-item">
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-cost">${item.cost}</div>
                <div className="cart-item-quantity">
                  <button className="cart-item-button" onClick={() => handleDecrement(item)} aria-label="Decrease quantity">-</button>
                  <span className="cart-item-quantity-value">{item.quantity}</span>
                  <button className="cart-item-button" onClick={() => handleIncrement(item)} aria-label="Increase quantity">+</button>
                </div>
                <div className="cart-item-total">Subtotal: ${Number(item.cost) * item.quantity}</div>
                <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="total_cart_amount">Total: ${totalAmount}</div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={onContinueShopping}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={handleCheckoutShopping}>Checkout — Coming Soon</button>
      </div>
    </div>
  );
}

export default CartItem;
