import { Product } from "../types/types";

export default function ProductsList({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((p) => (
        <div key={p.id} className="product-card">
          <div className="product-image">
            <img src={p.image} />
          </div>

          <div className="product-text">
            <div className="review-container">
              <p>
                ⭐<span className="review-rating">{p.rating.rate}</span>
              </p>
              <p>({p.rating.count} Reviews)</p>
            </div>
            <h3>{p.title}</h3>
            <p>$ {p.price}</p>
          </div>
        </div>
      ))}
    </>
  );
}
