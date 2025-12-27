import React from "react";
import ProductCard from "./ProductCard";
import { exploreProducts } from "./productData";

function ExploreSection() {
  return (
    <div className="section-container">
      <div className="section-header">
        <h2 className="section-title">Explore Products</h2>
        <a href="#" className="view-all">
          View All →
        </a>
      </div>
      <div className="grid">
        {exploreProducts.map(item => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default ExploreSection;