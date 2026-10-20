import './Navbar.css';

const Navbar = ({ cartCount, onOpenCart }) => {
  return (
    <nav className="navbar">
      <div className="nav-brand">ShopEase</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/categories">Categories</a></li>
        <li><a href="/about">About Us</a></li>
      </ul>
      <button className="cart-badge-btn" onClick={onOpenCart}>
        🛒 Cart <span className="badge">{cartCount}</span>
      </button>
    </nav>
  );
};

export default Navbar;