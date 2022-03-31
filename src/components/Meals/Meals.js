import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import '../Meal/Meal.css'

const Meals = () => {
    const params = useParams();
    const [meal, setMeal] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
            .then(res => res.json())
            .then(data => setMeal(data.meals))
    }, []);
    // console.log(meal)
    return (
        <div className='mt-20'>
            <h1>This Meal id is:  {params.id} </h1>
            <div>
                <img width={'400px'} src={meal[0]?.strMealThumb} alt="" className='mx-auto  m-1' />

                <h2 className='text-2xl'>Name:  {meal[0]?.strMeal}</h2>
                <p>{meal[0]?.strInstructions.slice(0, 50)}</p>

            </div >
        </div>
    );
};

export default Meals;