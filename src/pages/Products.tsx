import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Products.css";
import Spinner from "../components/Spinner";
import ProductCard from "../components/ProductCard";
import ProductsFilters from "../components/ProductsFilters";
import { getProducts } from "../api/api";
import { Filters, Product } from "../types/types";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState<Filters>({
    category: "",
    search: "",
  });

  const navigate = useNavigate();

  const filteredProducts = products.filter(
    (p) =>
      p.title.toLowerCase().includes(filters.search.toLowerCase()) &&
      (!filters.category || p.category === filters.category)
  );

  function handleFilterChange(
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) {
    const { id, value } = e.target;

    setFilters((prev) => ({ ...prev, [id]: value }));
  }

  function handleProductCardClick(productId: number) {
    const selectedProduct = products.find((p) => p.id === productId);

    navigate(`/product/${productId}`, {
      state: {
        product: selectedProduct,
        recommendedProducts: products.filter(
          (p) => p.category === selectedProduct?.category
        ),
      },
    });
  }

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
          {loading ? (
            <Spinner />
          ) : (
            <>
              {filteredProducts.length ? (
                filteredProducts.map((p) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    handleClick={handleProductCardClick}
                  />
                ))
              ) : (
                <p>There are no available products for the selected filters.</p>
              )}
            </>
          )}
        </div>
      )}
    </section>
  );
}
