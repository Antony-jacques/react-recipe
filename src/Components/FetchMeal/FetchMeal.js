import React from 'react';

const FetchMeal = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    .then(response => response.json())
    .then(response => console.log(response))


    return (
        <div>
            hello
        </div>
    );
}

export default FetchMeal;

