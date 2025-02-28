import { useState } from "react";

import "./AddProduct.css";
import { NewProduct, Product } from "../types/types";

export default function AddProduct() {
  const [newProduct, setNewProduct] = useState<NewProduct>({
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  });

  const [invalidInput, setInvalidInput] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { id, value } = event.target;

    setNewProduct((prev) => ({
      ...prev,
      [id]: id === "price" ? Number(value) : value,
    }));
  }

  function addNewProduct() {
    if (
      !newProduct.title ||
      !newProduct.price ||
      !newProduct.description ||
      !newProduct.category ||
      !newProduct.image
    ) {
      setInvalidInput(true);
      return;
    }

    const newProductId = Date.now() + Math.floor(Math.random() * 1_000_000);

    const storedProducts = localStorage.getItem("addedProducts");
    const addedProducts: Product[] = storedProducts
      ? JSON.parse(storedProducts)
      : [];

    localStorage.setItem(
      "addedProducts",
      JSON.stringify([
        ...addedProducts,
        {
          id: newProductId,
          ...newProduct,
          rating: { rate: 0, count: 0 },
        },
      ])
    );

    setNewProduct({
      title: "",
      price: 0,
      description: "",
      category: "",
      image: "",
    });

    setInvalidInput(false);
    setSuccessMsg(true);
  }

  return (
    <section className="addProduct-section">
      <h1>Add Product</h1>

      {successMsg && <p className="success-msg">Product successfully added!</p>}
      {invalidInput && (
        <p className="invalid-input">
          Please fill out all required fields correctly.
        </p>
      )}
      <form>
        <label htmlFor="title">
          Title
          <input
            id="title"
            type="text"
            placeholder="Enter title"
            onChange={(e) => handleChange(e)}
            value={newProduct.title}
          />
        </label>

        <div>
          <label htmlFor="price">
            Price
            <input
              id="price"
              type="number"
              step="0.01"
              min={5}
              placeholder="Enter price"
              onChange={(e) => handleChange(e)}
              value={newProduct.price}
            />
          </label>
          <label htmlFor="category">
            Category
            <select
              id="category"
              onChange={(e) => handleChange(e)}
              value={newProduct.category}
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="men's clothing">Men's clothing</option>
              <option value="women's clothing">Women's clothing</option>
              <option value="jewelery">Jewelery</option>
              <option value="electronics">Electronics</option>
            </select>
          </label>
        </div>

        <label htmlFor="description">
          Description
          <textarea
            id="description"
            placeholder="Enter description"
            rows={4}
            cols={30}
            onChange={(e) => handleChange(e)}
            value={newProduct.description}
          ></textarea>
        </label>

        <label htmlFor="image">
          Image
          <input
            id="image"
            type="url"
            placeholder="Enter URL"
            onChange={(e) => handleChange(e)}
            value={newProduct.image}
          />
        </label>

        <button type="button" onClick={addNewProduct}>
          Confirm
        </button>
      </form>
    </section>
  );
}
