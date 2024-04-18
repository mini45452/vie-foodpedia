import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MealList = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b');
                const data = await response.json();
                setMeals(data.meals);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        centerMode: true,
        centerPadding: '25%'
    };
    
    return (
        <div style={{ padding: '0px' }}> {/* Adjusted padding */}
            <h2>Meal List</h2>
            <Slider {...settings}>
                {meals.map((meal, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                        <a href={meal.strMealThumb} target="_blank" rel="noopener noreferrer">
                            <div style={{ margin: '0px' }}>
                                <img
                                    src={meal.strMealThumb}
                                    alt={meal.strMeal}
                                    style={{ width: '100%', maxHeight: '220px', objectFit: 'cover' }} // Corrected 'Width' to 'width'
                                />
                                <p style={{ margin: '0' }}>{meal.strMeal}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
    
};

export default MealList;
