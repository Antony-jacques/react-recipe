import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";


const SingleRecipe = () => {
  let history = useHistory();
  let location = useLocation();
  let currentMealId = location.state.idMeal

  const [singleMeal, setSingleMeal] = useState();

  const fecthSingleMeal = ()=>{
     fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${currentMealId}`)
     .then(response => response.json())
    //  .then(response=> console.log('response 16',response)) ok
     .then(response => {setSingleMeal(response)})
  }

//   console.log(singleMeal)

  return (
    <div>
        <h1>
      SingleRecipe
        </h1>
        <p>
            {currentMealId}
        </p>
      <div>
        <button onClick={() => history.push("/")}>Reteour à l'accueil</button>
      </div>
      <div>
          <button onClick={fecthSingleMeal}>fecthSingleMeal</button>
      </div>
    </div>
  );
};

export default SingleRecipe;
