import { useLocation, useNavigate } from "react-router-dom";

import "./ProductPage.css";
import { Product } from "../types/types";
import ProductCard from "../components/ProductCard";

export default function ProductPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const product: Product | undefined = location.state?.product;
  const recommendedProducts: Product[] = location.state?.recommendedProducts;

  function handleProductCardClick(productId: number) {
    const selectedProduct = recommendedProducts.find((p) => p.id === productId);

    window.scrollTo(0, 0);

    navigate(`/product/${productId}`, {
      state: {
        product: selectedProduct,
        recommendedProducts: recommendedProducts.filter(
          (p) => p.category === selectedProduct?.category
        ),
      },
    });
  }

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

          {recommendedProducts.length > 1 && (
            <div className="recommended-products">
              <h2>You might also like</h2>
              <div className="products-container">
                {recommendedProducts.map(
                  (p) =>
                    p.id !== product.id && (
                      <ProductCard
                        key={p.id}
                        product={p}
                        handleClick={handleProductCardClick}
                      />
                    )
                )}
              </div>
            </div>
          )}
        </>
      ) : (
        <p>Product was not found.</p>
      )}
    </section>
  );
}
