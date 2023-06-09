import React, { useState } from "react";

import { MenuItem, Select } from "@mui/material";

import "./index.scss";

export const CategorySelect = ({
  initialValue = "",
  categories = [],
  handleCategorySubmit = () => {},
}) => {
  const [categoryValue, setCategoryValue] = useState(initialValue);
  const handleChange = (e) => {
    setCategoryValue(e.target.value);
  };
  return (
    <Select
      className="category-select"
      name="category"
      value={categoryValue}
      onChange={handleChange}
      onBlur={handleCategorySubmit}
    >
      {categories.map((category) => (
        <MenuItem key={category.value} value={category.value}>
          {category.name}
        </MenuItem>
      ))}
    </Select>
  );
};
