import React, { useState, useEffect } from 'react';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Category List</h2>
      <ul className="category-list">
        {categories.map((category, index) => (
          <li key={index}>
            <a href={category.strCategoryThumb} target="_blank" rel="noopener noreferrer">
              {category.strCategoryThumb}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
