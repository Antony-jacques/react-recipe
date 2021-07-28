import React, {useContext, useState, useEffect} from 'react';
import {MyContext} from '../Context/Context.js'


const FetchMeal = () => {
    
    const {lang} = useContext(MyContext)
    
     const [ recipeArray, setRecipeArray] = useState([]);
    
    const getRecipe = ()=>{

            fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
            .then(response => response.json()) // transforme la rp en json afin de pouvoir la parcourir
            .then(response => {
                setRecipeArray(response.meals)
            })
        
    }
    
    
   useEffect(getRecipe,[])
    
    

    console.log('recipeArray', recipeArray)

    return (
        <div>
            hello
        </div>
    );
}

export default FetchMeal;

