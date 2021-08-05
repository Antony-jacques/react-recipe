import React, { useEffect, useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import "./RandomRecipe.css";
import { Link } from "react-router-dom";
import traductions from "../../assets/data.js";
import { MyContext } from "../Context/Context.js";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const RandomRecipe = () => {

  
  const [randomMeal, setRandomMeal] = useState([]);

  const { lang } = useContext(MyContext);

  const fetchRandomRecipe = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) =>  response.json())
      .then((response) => {
         setRandomMeal(response.meals);
      });
  };

    console.log("randomMeal", randomMeal);
  //  console.log("randomMeal[0].strMealThumb", randomMeal[0].strMealThumb);

  useEffect(fetchRandomRecipe, []);

  return (
    <div  id="recipe-of-the-day">
      <Container
        style={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}
      >
        <Row>
          <h2>{traductions[lang].subtitle}</h2>
          <h2>test</h2>

          {randomMeal[0] && (


            <Link
              to={{
                pathname: "/single",
                state: {
                  idMeal: randomMeal[0].idMeal,
                },
              }}
              className="recipe-card"
            >
              <Card>
                <Card.Img variant="top" src={randomMeal[0].strMealThumb} />
                <Card.Body>
                  <Card.Title>
                    {randomMeal[0].strMeal}
                    <h2>test</h2>
                    </Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Link>


            
            )} 
        </Row>
      </Container>
    </div>
  );
};

export default RandomRecipe;
