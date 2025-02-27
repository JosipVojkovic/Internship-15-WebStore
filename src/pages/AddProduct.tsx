import "./AddProduct.css";

export default function AddProduct() {
  return (
    <section className="addProduct-section">
      <h1>Add Product</h1>
      <form>
        <label htmlFor="title">
          Title
          <input id="title" type="text" placeholder="Enter title" />
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
            />
          </label>
          <label htmlFor="category">
            Category
            <select id="category">
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
          ></textarea>
        </label>

        <label htmlFor="image">
          Image
          <input id="image" type="url" placeholder="Enter URL" />
        </label>

        <button type="button">Confirm</button>
      </form>
    </section>
  );
}
