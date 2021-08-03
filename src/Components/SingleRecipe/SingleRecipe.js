import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./SingleRecipe.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";

const SingleRecipe = () => {

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);

  
  let history = useHistory();
  let location = useLocation();
  let currentMealId = location.state.idMeal;

  const [singleMeal, setSingleMeal] = useState();

  const ingredientAray = [];
  let instructions = [];

  const fecthSingleMeal =  () => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${currentMealId}`
    )
      .then((response) => response.json())
      //  .then(response=> console.log('response 16',response)) ok
      .then((response) => {
        setSingleMeal(response.meals[0]);
      });
  };

  if (singleMeal) {
    instructions = singleMeal.strInstructions.split(".");
    //  console.log(instructions)
    instructions.pop();
  }

  if (singleMeal) {
    for (let i = 1; i <= 20; i++) {
      if (singleMeal[`strIngredient${i}`]) {
        //  console.log(`${singleMeal[`strIngredient${i}`]} - ${singleMeal[`strMeasure${i}`]} `)
        // ingredientAray.push(
        //   `${singleMeal[`strIngredient${i}`]} - ${
        //     singleMeal[`strMeasure${i}`]
        //   } `
        // );

        ingredientAray.push({
          name: singleMeal[`strIngredient${i}`],
          quantity: singleMeal[`strMeasure${i}`],
          image: `https://www.themealdb.com/images/ingredients/${
            singleMeal[`strIngredient${i}`]
          }.png`,
        });
      }
    }

    //  instructions.push(singleMeal.strInstructions.split("."))
    //  console.log('instructions', instructions)
  }

  useEffect(fecthSingleMeal, []);

  //   console.log(singleMeal);
  // console.log("singleMeal", singleMeal);
  // console.log("ingredientAray", ingredientAray);

  // console.log(singleMeal);

  return (
    <div className="mt-5">
      
      <div>
        <button onClick={() => history.push("/")}>Retour à l'accueil</button>
      </div>
      {singleMeal && (
        <Container className="mt-5">
          <Row>
            <Col style={{  }} md={4}>
              <h2 >{singleMeal.strMeal}</h2>
              <img
                style={{ width: "100%", borderRadius:'15px', marginTop:'2rem' }}
                src={singleMeal.strMealThumb}
                alt=""

              />
            </Col>
            <Col style={{ padding: "1rem" }} md={8}>
              {/* <h2>Ingrédients</h2> */}

              <Accordion >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Ingrédients</Accordion.Header>
                  <Accordion.Body>

                  <Container style={{ display: "flex", justifyContent: "center" }}>
        <Row> 

              <ul id="ingredients" style={{    display: 'flex',
    flexWrap: 'wrap'}}>
                {ingredientAray.map((val, index) => {
                  return (
                    <li className={`ingredient   ${(index+1) % 2 > 0 && 'test'}`}  key={index}>
                      <img style={{width:'200px'}} src={val.image} alt="" />
                      <h3>
                      {val.name} 
                      </h3>
                      <h4>
                      {val.quantity}
                      </h4>

                    </li>
                  );
                })}
              </ul>
              </Row>
          </Container>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>



              <Accordion >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Instructions</Accordion.Header>
                  <Accordion.Body>
                    <ol style={{listStyleType: 'none', textAlign: 'left', padding:'0px'}}>
                      {instructions.map((val, index) => {
                        return (
                          <li style={{margin:'2rem'}} key={index}>
                            <h3>Etape {index + 1}</h3>
                            {val}
                          </li>
                        );
                      })}
                    </ol>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      )}

      {/*
      
      

    */}


    </div>
  );
};

export default SingleRecipe;
