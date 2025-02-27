import "./AddProduct.css";

export default function AddProduct() {
  return (
    <section className="addProduct-section">
      <h1>Add Product</h1>
      <form>
        <label htmlFor="title">
          Title: <input id="title" type="text" placeholder="Enter title" />
        </label>

        <label htmlFor="price">
          Price:{" "}
          <input
            id="price"
            type="number"
            step="0.01"
            placeholder="Enter price"
          />
        </label>

        <label htmlFor="description">
          Description:{" "}
          <input id="description" type="text" placeholder="Enter description" />
        </label>

        <label htmlFor="category">
          Category:{" "}
          <select id="category">
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
          </select>
        </label>

        <label htmlFor="image">
          Image: <input id="image" type="url" placeholder="Enter URL" />
        </label>

        <button type="button">Confirm</button>
      </form>
    </section>
  );
}
