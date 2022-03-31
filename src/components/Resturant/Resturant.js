import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Reasturant.css'
const Resturant = () => {
    const [serchText, setSearchText] = useState('');
    //second hook
    const [meals, setMeals] = useState([]);
    //useEffect hook
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${serchText}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))

    }, [serchText]);
    // event handler
    const handleSearch = (event) => {
        setSearchText(event.target?.value)
    }
    return (
        <div>
            <h1 className='text-3xl'>Search your food </h1>
            <input onChange={handleSearch} type="text" name="" id="" placeholder='Search here' className='bg-indigo-20 border-4 bg-slate-100 text-center mt-5 p-1' />
            <h1>Total:{meals.length}</h1>
            <div className='meal-parent'>
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Resturant;