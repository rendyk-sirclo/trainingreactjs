import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card/Card";

const Detail = () => {
  let categoryName = useParams().categoryName;
  let [meals, setMeals] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
      const data = await res.json()
      setMeals(data.meals);
    }
    fetchData();
  }, [])

  return (
    <div>
      <h1 className="categoryName">{categoryName}</h1>
      {
        <div className="gallery">
          {
            meals && meals.length > 0 ? meals.map(meal => {
              return (
                <Card key={meal.idMeal} title={meal.strMeal} imgSource={meal.strMealThumb} />
              )
            }
            ) : (<div style={{ width: "100%" }}>Loading...</div>)
          }
        </div>
      }
    </div>
  )
}

export default Detail;