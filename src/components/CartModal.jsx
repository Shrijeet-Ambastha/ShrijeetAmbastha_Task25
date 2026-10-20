import './CartModal.css';

export default function CartModal({
  isOpen,
  onClose,
  cartItems,
  onIncreaseQty,
  onDecreaseQty,
  onRemoveItem,
}) {
  if (!isOpen) return null;

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-backdrop" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty-cart-msg">Your cart is empty.</p>
        ) : (
          <>
            <ul className="cart-list">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p className="cart-item-price">${item.price.toFixed(2)} each</p>
                  </div>
                  <div className="cart-item-actions">
                    <button onClick={() => onDecreaseQty(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onIncreaseQty(item.id)}>+</button>
                  </div>
                  <div className="cart-item-subtotal">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button
                    className="delete-item-btn"
                    onClick={() => onRemoveItem(item.id)}
                  >
                    🗑
                  </button>
                </li>
              ))}
            </ul>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total:</span>
                <span className="total-amount">${totalPrice.toFixed(2)}</span>
              </div>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}