import { useLocation } from "react-router-dom";

import "./ProductPage.css";
import { Product } from "../types/types";
import ProductCard from "../components/ProductCard";

export default function ProductPage() {
  const location = useLocation();
  const product: Product | undefined = location.state?.product;
  const recommendedProducts: Product[] = location.state?.recommendedProducts;

  return (
    <section className="product-section">
      {product ? (
        <>
          <div className="product-container">
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
          </div>

          <div className="recommended-products">
            <h2>You might also like</h2>
            <div className="products-container">
              {recommendedProducts.map((p) => (
                <ProductCard key={p.id} product={p} handleClick={() => {}} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <p>Product was not found.</p>
      )}
    </section>
  );
}
