import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const LineChart1 = () => {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 590,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];


  return (
    <div>
      <LineChart
        width={600}
        height={300}
        data={data}
      >
        <XAxis dataKey="name"></XAxis>
        <YAxis dataKey=''></YAxis>
        <CartesianGrid stroke='#88cfBd'></CartesianGrid>
        <Tooltip></Tooltip>
        <Legend></Legend>
        <Line type='monotone' dataKey='pv' stroke='#8884d8' activeDot={{ r: 20 }}></Line>
        <Line type='monotone' dataKey={'uv'}></Line>
      </LineChart>

    </div>
  );
};

export default LineChart1;