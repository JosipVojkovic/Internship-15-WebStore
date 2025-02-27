import { useEffect, useState } from "react";

import Spinner from "../components/Spinner";
import ProductsList from "./ProductsList";

import "./Products.css";
import { getProducts } from "../api/api";
import { Product } from "../types/types";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getProducts();
        setProducts(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <section className="products-section">
      <h1>Products</h1>
      {error ? (
        <p className="error-msg">{error}</p>
      ) : (
        <div className="products-container">
          {loading ? <Spinner /> : <ProductsList products={products} />}
        </div>
      )}
    </section>
  );
}
