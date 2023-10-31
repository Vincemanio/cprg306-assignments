import React, { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selected, setSelected] = useState(false);
  const [selectedMealIngredients, setSelectedMealIngredients] = useState(null);

  const fetchMealsByIngredient = async (ingredient) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
      }
    } catch (error) {
      console.error("Error fetching meal ideas: ", error);
      setMeals([]);
    }
  };

  const fetchIngredientsByMeal = async (mealId) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
      const data = await response.json();
      if (data.meals) {
        setSelectedMealIngredients(data.meals[0]);
      } else {
        setSelectedMealIngredients(null);
      }
    } catch (error) {
      console.error("Error fetching meal ingredients: ", error);
      setSelectedMealIngredients(null);
    }
  };

  useEffect(() => {
    if (ingredient) {
      setSelected(false);
      setMeals([]);
      fetchMealsByIngredient(ingredient);
    }
  }, [ingredient]);

  const handleMealClick = (meal) => {
    setSelected(true);
    fetchIngredientsByMeal(meal.idMeal);
  };

  return (
    <div>
      <h1 className="text-4xl font-mono mb-4 font-bold mt-8 ml-14">Meal Ideas</h1>

      {selected ? (
        selectedMealIngredients ? (
          <div className="ml-10 p-5 rounded shadow">
            <h2 className="text-2xl font-mono mb-4 font-bold mt-4 text-pink-800">
              Selected Meal: {selectedMealIngredients.strMeal}
            </h2>
            <img
              src={selectedMealIngredients.strMealThumb}
              alt={selectedMealIngredients.strMeal}
              style={{ width: '200px', height: '200px' }}
            />
            <h3 className="text-2xl font-mono mb-2 font-bold text-pink-800">Ingredients:</h3>
            <ul>
              {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => {
                const ingredient = selectedMealIngredients[`strIngredient${i}`];
                const measure = selectedMealIngredients[`strMeasure${i}`];
                return ingredient ? (
                  <li
                    key={i}
                    className="font-mono text-lg"
                  >{`${ingredient}: ${measure}`}</li>
                ) : null;
              })}
            </ul>
          </div>
        ) : (
          <p className="ml-10 p-5 rounded shadow text-2xl font-mono font-bold mt-4 text-pink-800">
            No meal selected
          </p>
        )
      ) : meals.length > 0 ? (
        <div className="ml-10 p-5 rounded shadow">
          <h2 className="text-2xl font-mono mb-4 font-bold mt-4 text-pink-800">
            Meal Ideas for {ingredient}
          </h2>
          <ul>
            {meals.map((meal) => (
              <li
                key={meal.idMeal}
                onClick={() => handleMealClick(meal)}
                className="font-mono text-lg"
              >
                {meal.strMeal}
                <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '300px', height: '300px' }} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="ml-10 p-5 rounded shadow text-2xl font-mono font-bold mt-4 text-pink-800">
          No meals found for {ingredient}
        </p>
      )}
    </div>
  );
}