import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Specialist = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const lodedData = data.data.data;
                const phoneData = lodedData.map(phone => {

                    const parts = phone.slug.split('-');
                    const ph = {
                        name: parts[0],
                        value: parseInt(parts[1])
                    }
                    return ph;
                })
                // const parts = phoneData.split('');
                setPhones(phoneData)

            })
    }, [])
    return (
        <div>
            <BarChart width={600} height={400} data={phones}>
                <XAxis dataKey='name'></XAxis>
                <YAxis ></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey='value' fill='#8884d8'></Bar>
            </BarChart>
        </div>
    );
};

export default Specialist;