import React, { useState, useEffect } from 'react';

const IngredientList = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
        const data = await response.json();
        setIngredients(data.meals);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to split the list of ingredients into two columns
  const splitIntoTwoColumns = (ingredients) => {
    const mid = Math.ceil(ingredients.length / 2);
    const firstColumn = ingredients.slice(0, mid);
    const secondColumn = ingredients.slice(mid);
    return [firstColumn, secondColumn];
  };

  // Split the ingredients into two columns
  const [firstColumn, secondColumn] = splitIntoTwoColumns(ingredients);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Ingredient List</h2>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <ul>
            {firstColumn.map((ingredient, index) => (
              <li key={index}>{ingredient.strIngredient}</li>
            ))}
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <ul>
            {secondColumn.map((ingredient, index) => (
              <li key={index}>{ingredient.strIngredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IngredientList;
