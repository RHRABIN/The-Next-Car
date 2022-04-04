import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReview from '../../hook/Review';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Home.css'
const Home = () => {
    const [reviews, setReviews] = useReview();
    const navigate = useNavigate();
    return (
        <div >
            <div className='home-parent-class'>
                <div className='text-container '>
                    <h1>The next car</h1>
                    <h1 style={{ color: 'blue' }}>The best car</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas officia rerum ducimus sequi dolores saepe molestiae soluta animi magni aliquid dolore cum molestias ad facere distinctio ullam consequatur, beatae nostrum quis enim esse repudiandae?</p>
                    <button className='button-live-demo'>Live Demo</button>
                </div>
                <div className='img-container'>
                    <img src='https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67418.jpg?size=626&ext=jpg&ga=GA1.2.1334899409.1648290026' alt="" />
                </div>
            </div>
            <div>
                <h3 style={{ textAlign: 'center' }}>Customer Reviews(3)</h3>
                <div className='review-parent'>
                    {
                        reviews.slice(0, 3).map(review => <ReviewItem key={review.id} reviews={review}></ReviewItem>)
                    }
                </div>
                <div style={{ textAlign: 'center' }}>
                    <button className='review-button' onClick={() => navigate('/review')}>See all reviews</button>
                </div>
            </div>
        </div>
    );
};

export default Home;