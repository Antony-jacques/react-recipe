import React, { useEffect, useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import './RandomRecipe.css'
import { Link } from "react-router-dom";
import traductions from "../../assets/data.js";
import {MyContext} from "../Context/Context.js"



const RandomRecipe = () => {
  const [randomMeal, setRandomMeal] = useState();

  const {lang} = useContext(MyContext)
  
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

  return <div id='recipe-of-the-day'>
      <h2>{traductions[lang].subtitle}</h2>

      {randomMeal && 
      
      <Link
                      to={{
                        pathname: "/single",
                        state: {
                          idMeal: randomMeal.idMeal,
                        },
                      }}
                      className="recipe-card"
                    >

      <Card className="recipe-card">
                <Card.Img variant="top" src={randomMeal.strMealThumb} />
                <Card.Body>
                  <Card.Title>
                      {randomMeal.strMeal}
                  </Card.Title>
                  <Card.Text></Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
                    </Link>
      
      
      }
      
  </div>;
};

export default RandomRecipe;
