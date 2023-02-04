import "./CategoryFilter.css";

export const CategoryFilter = () => {
  return (
    <div className="category-filter-wrapper">
      <select className="filter-options">
        <option className="filter-option" value="All">
          All Categories
        </option>
        {/* {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
         ))} */}
        <option className="filter-option" value="men">
          Men's Clothing
        </option>
        <option className="filter-option" value="women">
          Women's Clothing
        </option>
        <option className="filter-option" value="electronics">
          Electronics
        </option>
        <option className="filter-option" value="jewellery">
          Jewellery
        </option>
      </select>
    </div>
  );
};
