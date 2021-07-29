/* eslint-disable */
import React, { useContext } from "react";
import "./Content.css";
import traductions from "../../assets/data.js";
import { MyContext } from "../Context/Context.js";

import FetchMeal from '../FetchMeal/FetchMeal.js'

const Content = () => {
  const { lang } = useContext(MyContext);
  console.log(lang);



  return (
    <div className="content">
      <h1>{traductions[lang].title}</h1>
      {/*  [] : notation quand les noms des propriétés sont déterminés de façon dynamique.
            les valeurs utilisées entre les crochets sont automatiquement converties en chaînes de caractères  */}
            <FetchMeal/>
    </div>
  );
};

export default Content;
