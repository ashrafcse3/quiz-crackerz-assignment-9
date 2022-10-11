import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Tooltip, XAxis, YAxis } from "recharts";


const Statics = () => {
    const { data } = useLoaderData();
    console.log(data[0].total);
    return (
        <div className='flex justify-center mt-10'>
            <BarChart width={500} height={500} data={data}>
                <Bar dataKey="total" fill="#8884d8" />
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip />
            </BarChart>
        </div>
    );
};

export default Statics;