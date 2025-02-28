import { useEffect, useState } from "react";

import Spinner from "../components/Spinner";
import ProductsList from "./ProductsList";

import "./Products.css";
import { getProducts } from "../api/api";
import { Filters, Product } from "../types/types";
import ProductsFilters from "../components/ProductsFilters";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState<Filters>({
    category: "",
    search: "",
  });

  function handleFilterChange(
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) {
    const { id, value } = e.target;

    setFilters((prev) => ({ ...prev, [id]: value }));
  }

  console.log(JSON.stringify(filters));

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getProducts();
        const storedProducts = localStorage.getItem("addedProducts");
        const parsedProducts: Product[] = storedProducts
          ? JSON.parse(storedProducts)
          : [];

        if (Array.isArray(parsedProducts)) {
          setProducts([...result, ...parsedProducts]);
        } else {
          setProducts(result);
        }
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
      {!loading && (
        <ProductsFilters filters={filters} handleChange={handleFilterChange} />
      )}
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
