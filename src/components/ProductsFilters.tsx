import "./ProductsFilters.css";
import searchIcon from "../assets/searchIcon.png";
import { Filters } from "../types/types";

export default function ProductsFilters({
  filters,
  handleChange,
}: {
  filters: Filters;
  handleChange: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
}) {
  return (
    <div className="search-filters-wrapper">
      <label htmlFor="category">
        Category:
        <select
          id="category"
          onChange={(e) => handleChange(e)}
          value={filters.category}
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

      <div className="search-container">
        <img src={searchIcon} alt="" />
        <input
          id="search"
          type="search"
          value={filters.search}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
}
