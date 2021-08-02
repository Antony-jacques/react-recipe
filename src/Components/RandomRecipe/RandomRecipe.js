import React, { useEffect, useState } from "react";

const RandomRecipe = () => {
  const [randomMeal, setRandomMeal] = useState();

  const fetchRandomRecipe = () => {
    fetch("https:www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => {
        return response.json()
      })
      .then((response) => {
          return(

              setRandomMeal(response.meals[0])
          )
      })

    };
    
    console.log("randomMeal", randomMeal)

  useEffect(fetchRandomRecipe, []);

  return <div>RandomRecipe</div>;
};

export default RandomRecipe;
