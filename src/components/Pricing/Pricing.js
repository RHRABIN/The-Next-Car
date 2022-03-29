import React from 'react';
import PricingOptions from '../PricingOptions/PricingOptions';

const Pricing = () => {
    const pricing = [
        { id: 1, name: 'Free', price: '0.00', benifits: ['lifetime free', 'unlimited deals', 'localized deals', 'fantastic deals', 'crazy deals'] },

        { id: 2, name: 'Regular', price: 9.99, benifits: ['Regular free', 'unlimited deals', 'localized deals', 'fantastic deals', 'crazy deals'] },

        { id: 3, name: 'Premium', price: 19.99, benifits: ['Premium free', 'unlimited deals', 'localized deals', 'fantastic deals',] },
    ]
    return (
        <div className='bg-indigo-300 mt-8 p-4 font-mono'>
            <h1 className='text-5xl'>Best Deals of the Twon</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia animi enim quam doloribus nam ratione pariatur officiis. </p>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricing.map(option => <PricingOptions key={option.id} option={option}></PricingOptions>)
                }
            </div>


        </div>
    );
};

export default Pricing;