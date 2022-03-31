import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Meal.css'
const Meal = ({ meal }) => {
    const { idMeal, strMeal, strMealThumb, strInstructions } = meal;
    let navigate = useNavigate();
    const handleDetails = () => {
        const path = `/meals/${idMeal}`
        navigate(path);
    }
    return (

        <div className='meal-class'>
            <img src={strMealThumb} alt="" className='mx-auto w-full m-1' />

            <h2 className='text-2xl'>{strMeal}</h2>
            <p>{strInstructions.slice(0, 50)}</p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2' onClick={handleDetails}>See detail</button>
        </div >

    );
};

export default Meal;