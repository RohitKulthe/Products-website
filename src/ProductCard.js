import React from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  // Generate star rating display
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) stars += '★';
    
    // Add half star if needed
    if (hasHalfStar) stars += '★';
    
    // Fill remaining with empty stars
    while (stars.length < 5) stars += '☆';
    
    return stars;
  };

  // Generate review counts
  const getReviewCount = (id) => {
    const reviewMap = {
      1: 682, 2: 360, 3: 446, 4: 606, 5: 512,
      101: 454, 102: 781, 103: 471, 104: 813, 105: 731
    };
    return reviewMap[id] || Math.floor(Math.random() * 500) + 200;
  };

  return (
    <div className="product-card">
      {product.tag && <div className="product-tag">{product.tag}</div>}
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
        <button className="wishlist-btn">♡</button>
      </div>
      <div className="product-info">
        <h4 className="product-title">{product.title}</h4>
        <div className="product-rating">
          <span className="stars">{renderStars(product.rating)}</span>
          <span className="rating-text">{product.rating}</span>
          <span className="reviews">({getReviewCount(product.id)} reviews)</span>
        </div>
        <div className="product-pricing">
          <span className="current-price">{product.price}</span>
          {product.originalPrice && (
            <span className="original-price">{product.originalPrice}</span>
          )}
          {product.discount && (
            <span className="discount">{product.discount}</span>
          )}
        </div>
        <div className="emi-badge">No Cost EMI Available</div>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;