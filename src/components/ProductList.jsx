import ProductCard from './ProductCard';
import './ProductList.css';

const PRODUCTS = [
  {
    id: 1,
    name: 'Wireless Noise-Canceling Headphones',
    price: 199.99,
    description: 'Over-ear Bluetooth headphones with active noise cancellation.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
  },
  {
    id: 2,
    name: 'Smart Fitness Watch',
    price: 89.5,
    description: 'Track heart rate, sleep cycles, workouts, and daily steps.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
  },
  {
    id: 3,
    name: 'Mechanical Gaming Keyboard',
    price: 129.0,
    description: 'RGB backlit keyboard with tactile mechanical switches.',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80',
  },
  {
    id: 4,
    name: 'Minimalist Leather Backpack',
    price: 74.99,
    description: 'Water-resistant everyday bag with a dedicated 15-inch laptop compartment.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',
  },
];

export default function ProductList({ onAddToCart }) {
  return (
    <section className="product-section">
      <h2 className="section-title">Featured Products</h2>
      <div className="product-grid">
        {PRODUCTS.map((item) => (
          <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  );
}