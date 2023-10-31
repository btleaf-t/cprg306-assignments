import { useEffect } from "react";
import React, {useState} from 'react';

const MealIdeas = ({ingredient}) => {
    const [meals, setMeals] = useState([]);

    const fetchMealIdeas = async (ingredient) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);

            const data = await response.json();
            return data.meals.map((meal) => ({
                idMeal: meal.idMeal,
                strMeal: meal.strMeal,
                strMealThumb: meal.strMealThumb,
            }));
        } catch (error) {
            console.log('Error fetching meal ideas', error);
            return [];
        }
    };

    const loadMealIdeas = async (ingredient) => {
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals);
    };

    useEffect(() => {
        loadMealIdeas(ingredient);
    }, [ingredient]);

    return (
        <div>
            <h2>Meal Ideas with {ingredient}</h2>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal}>{meal.strMeal}</li>
                ))}
            </ul>
        </div>
    )

};

export default MealIdeas;