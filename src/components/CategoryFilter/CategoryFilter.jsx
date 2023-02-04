export const CategoryFilter = () => {
  return (
    <div className="category-filter-wrapper">
      <select>
        <option value="All">All Categories</option>
        {/* {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
         ))} */}
        <option value="men">Men's Clothing</option>
        <option value="women">Women's Clothing</option>
        <option value="electronics">Electronics</option>
        <option value="jewellery">Jewellery</option>
      </select>
    </div>
  );
};
