import { Product } from "../types/types";

export default function ProductCard({
  product,
  handleClick,
}: {
  product: Product;
  handleClick: (productId: number) => void;
}) {
  return (
    <>
      <div
        key={product.id}
        className="product-card"
        onClick={() => handleClick(product.id)}
      >
        <div className="product-image">
          <img src={product.image} />
        </div>

        <div className="product-text">
          <div className="review-container">
            <p>
              ⭐<span className="review-rating">{product.rating.rate}</span>
            </p>
            <p>({product.rating.count} Reviews)</p>
          </div>
          <h3>{product.title}</h3>
          <p>$ {product.price}</p>
        </div>
      </div>
    </>
  );
}
