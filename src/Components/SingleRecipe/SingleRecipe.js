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

        useEffect(
            fecthSingleMeal
          , []);
        
       if(singleMeal){

           for(let i= 1; i<=20; i++){
               if(singleMeal[`strIngredient${i}`]){
                   console.log('les ingredients',singleMeal[`strIngredient${i}`])
   
               }
          }
       }
       

//   console.log(singleMeal);
  console.log("singleMeal", singleMeal);



console.log(singleMeal)

  return (
    <div>
      <h1>SingleRecipe</h1>
      <p>{currentMealId}</p>
      {singleMeal && 
      
      
      <Container>
  <Row>
    <Col style={{backgroundColor:'red'}} md={4}>sm=4
    <img style={{width:'100%'}} src={singleMeal.strMealThumb} alt=""/>

    </Col>
    <Col style={{backgroundColor:'green'}} md={8}>sm=8


{/*
Object.keys(singleMeal).map(function(keyName, keyIndex) {
  // use keyName to get current key's name
  // and a[keyName] to get its value
  if(singleMeal[keyName]!==""){
      return(
          <p>{keyName} - {singleMeal[keyName]} </p>
      )
  }
})

*/}
    
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
