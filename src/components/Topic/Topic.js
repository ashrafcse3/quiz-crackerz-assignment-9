import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic;
    // console.log(name)
    return (
        <div className='bg-gray-500 rounded-xl p-4 text-white'>
            <h3 className='text-3xl'>{name}</h3>
            <div className='items-center justify-center flex p-5'>

                <img className='w-9/12' src={logo} alt="" />
            </div>
            <p>Total questions: {total}</p>
            <Link to={`/quiz/${id}`}>
                <button className='border-purple-500 border-2 w-full py-2 my-3 rounded-md hover:bg-purple-500'>Start quiz</button>
            </Link>
        </div>
    );
};

export default Topic;