import React, { useState, useEffect } from 'react';

const AreaList = () => {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
        const data = await response.json();
        setAreas(data.meals);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to split the list of areas into two columns
  const splitIntoTwoColumns = (areas) => {
    const mid = Math.ceil(areas.length / 2);
    const firstColumn = areas.slice(0, mid);
    const secondColumn = areas.slice(mid);
    return [firstColumn, secondColumn];
  };

  // Split the areas into two columns
  const [firstColumn, secondColumn] = splitIntoTwoColumns(areas);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Area List</h2>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <ul>
            {firstColumn.map((area, index) => (
              <li key={index}>{area.strArea}</li>
            ))}
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <ul>
            {secondColumn.map((area, index) => (
              <li key={index}>{area.strArea}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AreaList;
