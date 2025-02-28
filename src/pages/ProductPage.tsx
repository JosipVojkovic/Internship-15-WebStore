import { useLocation } from "react-router-dom";

import "./ProductPage.css";
import { Product } from "../types/types";

export default function ProductPage() {
  const location = useLocation();
  const product: Product | undefined = location.state?.product;

  return (
    <section className="product-section">
      <img src={product?.image} alt={"image of" + product?.title} />

      <div className="product-details">
        <h1>{product?.title}</h1>
        <p className="product-price">$ {product?.price}</p>
        <div className="product-review-container">
          <p>
            ⭐
            <span className="product-review-rating">
              {product?.rating.rate}
            </span>
          </p>
          <p>({product?.rating.count} Reviews)</p>
        </div>
        <div className="product-description">
          <h3>Description:</h3>
          <p>{product?.description}</p>
        </div>
      </div>
    </section>
  );
}
