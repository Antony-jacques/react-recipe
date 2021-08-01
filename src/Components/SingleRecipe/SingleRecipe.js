import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import './SingleRecipe.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const SingleRecipe = () => {

    
    let history = useHistory();
    let location = useLocation();
    let currentMealId = location.state.idMeal;
    
    const [singleMeal, setSingleMeal] = useState();
    
    const ingredientAray = []
    
    const fecthSingleMeal = async () => {
        fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${currentMealId}`
            )
            .then((response) => response.json())
            //  .then(response=> console.log('response 16',response)) ok
            .then((response) => {
                setSingleMeal(response.meals[0]);
            });


            console.log('useeffect')
        };

        if(singleMeal){
 
            for(let i= 1; i<=20; i++){
                if(singleMeal[`strIngredient${i}`]){
                   //  console.log(`${singleMeal[`strIngredient${i}`]} - ${singleMeal[`strMeasure${i}`]} `)
                    ingredientAray.push(`${singleMeal[`strIngredient${i}`]} - ${singleMeal[`strMeasure${i}`]} `)
    
                }
           }
        }

        useEffect(
            fecthSingleMeal
          , []);
        
       

//   console.log(singleMeal);
  console.log("singleMeal", singleMeal);
  console.log("ingredientAray", ingredientAray);



console.log(singleMeal)

  return (
    <div>
      <h1>SingleRecipe</h1>
      <p>{currentMealId}</p>
      {singleMeal && 
      
      
      <Container>
  <Row>
    <Col style={{backgroundColor:'red'}} md={4}>
      <h2>{singleMeal.strMeal}</h2>
    <img style={{width:'100%'}} src={singleMeal.strMealThumb} alt=""/>

    </Col>
    <Col style={{padding:'1rem'}} md={8}>
      <h2>Ingrédients</h2>
      <ul>


        {ingredientAray.map((val,index)=>{
          return(
            <li key={index}>{val}</li>
            )
          })}
    
          </ul>
          <p>
            {singleMeal.strInstructions}
          </p>
    </Col>
  </Row>
  </Container>

      
      
      }
      
      
      
      

      {/*
      
      

    */}
      
      <div>
        <button onClick={() => history.push("/")}>Reteour à l'accueil</button>
      </div>
      <div>
        <button onClick={() => console.log('hellooooo')}>effects</button>
      </div>
    </div>
  );
};

export default SingleRecipe;
