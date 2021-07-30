import React from "react";
import { useHistory } from "react-router-dom";

const SingleRecipe = () => {
  let history = useHistory();

  return (
    <div>
      SingleRecipe
      <div>
        <button onClick={() => history.push("/")}>Reteour à l'accueil</button>
      </div>
    </div>
  );
};

export default SingleRecipe;
