import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "../Context/Context.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

import "./FetchMeal.css";

import { Link } from "react-router-dom";

const FetchMeal = () => {
  const { lang } = useContext(MyContext);

  const [recipeArray, setRecipeArray] = useState([]);

  const getRecipe = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${lang}`)
      .then((response) => response.json()) // transforme la rp en json afin de pouvoir la parcourir
      .then((response) => {
        setRecipeArray(response.meals);
      });
  };

  useEffect(getRecipe, [lang]);

  console.log("recipeArray", recipeArray);
  console.log("lang", lang);

  return (
    <div id="recipe-list">

      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Row>
          {/* {recipeArray.slice(0, 6).map((val, index) => { */}
          {recipeArray.map((val, index) => {
            //.slice permet de restreindre l'array à n éléments
            return (
              // <Col md={6} lg={6} xl={4}>

                    <Link
                      to={{
                        pathname: "/single",
                        state: {
                          idMeal: val.idMeal,
                        },
                      }}
                      key={index} className="recipe-card"
                    >
              <Card >
                <Card.Img variant="top" src={val.strMealThumb} />
                <Card.Body>
                  <Card.Title>
                      {val.strMeal}
                  </Card.Title>
                  <Card.Text></Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
                    </Link>

              // </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default FetchMeal;
