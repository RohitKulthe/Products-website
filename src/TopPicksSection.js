import React from "react";
import ProductCard from "./ProductCard";
import { topPicksProducts } from "./productData";

function TopPicksSection() {
  return (
    <div className="section-container">
      <div className="section-header">
        <h2 className="section-title">Top Picks For You</h2>
        <a href="#" className="view-all">
          View All →
        </a>
      </div>
      <div className="grid">
        {topPicksProducts.map(item => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default TopPicksSection;