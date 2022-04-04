import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <div className='home-parent-class'>
            <div className='text-container '>
                <h1>The next car</h1>
                <h1 style={{ color: 'hwb(251 16% 24%)' }}>The best car</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas officia rerum ducimus sequi dolores saepe molestiae soluta animi magni aliquid dolore cum molestias ad facere distinctio ullam consequatur, beatae nostrum quis enim esse repudiandae?</p>
                <button className='button-live-demo'>Live Demo</button>
            </div>
            <div className='img-container'>
                <img src='https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67418.jpg?size=626&ext=jpg&ga=GA1.2.1334899409.1648290026' alt="" />
            </div>
        </div>
    );
};

export default Home;