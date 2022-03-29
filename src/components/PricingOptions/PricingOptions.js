import React from 'react';
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/solid'
import Benifit from '../Benifit/Benifit';

const PricingOptions = (props) => {
    const { name, price, benifits } = props.option;
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='bg-indigo-300 py-2 rounded font-bold  text-2xl'>{name}</h2>
            <p>
                <span className='text-4xl font-bold'>{price}</span>
                <span className='font-bold text-gray-500'>/mo</span>
            </p>
            <div >
                <h3 className='text-xl  text-left'>Benifits:</h3>
                {
                    benifits.map(benifit => <Benifit benifit={benifit}></Benifit>)
                }

            </div>
            <button className='bg-green-500 flex w-full text-white justify-center py-2 rounded text-xl items-center mt-4 hover:text-green-800 font-bold'>Buy Now <ArrowRightIcon className='w-6 ml-2'></ArrowRightIcon></button>

        </div>
    );
};

export default PricingOptions;