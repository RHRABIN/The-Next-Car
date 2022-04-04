import React from 'react';
import useReview from '../../hook/Review';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css'
const Review = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div className='all-review'>
            {
                reviews.map(review => <ReviewItem key={review.id} reviews={review}></ReviewItem>)
            }
        </div>
    );
};

export default Review;