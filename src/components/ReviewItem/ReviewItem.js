import React from 'react';
import { StarIcon, } from '@heroicons/react/solid'
import './ReviewItem.css'
const ReviewItem = ({ reviews }) => {
    const { name, review, url, date } = reviews;
    return (
        <div className='single-review-container'>
            <div className='img-star-logo-container'>
                <div className='img-star-container'>
                    <img src={url} alt="" />
                    <div className='start-name'>
                        <h2>{name}</h2>
                        <StarIcon className='star-icon'></StarIcon>
                        <StarIcon className='star-icon'></StarIcon>
                        <StarIcon className='star-icon'></StarIcon>
                        <StarIcon className='star-icon'></StarIcon>
                        <StarIcon className='star-icon'></StarIcon>
                        <span><small style={{ marginLeft: '5px' }}>{date}</small></span>
                    </div>
                </div>
                <a href="#home"> <img className='logo' src="https://img.freepik.com/free-vector/modern-facebook-icon-design_1035-8955.jpg?size=338&ext=jpg&ga=GA1.1.1334899409.1648290026" alt="" /></a>
            </div>
            <p>{review}</p>
        </div>
    );
};

export default ReviewItem;