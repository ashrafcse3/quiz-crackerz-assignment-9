import React from 'react';

const Topic = ({ topic }) => {
    const { name, logo, total } = topic;
    console.log(name)
    return (
        <div className='bg-gray-500 rounded-xl p-4 text-white'>
            <h3 className='text-3xl'>{name}</h3>
            <div className='items-center justify-center flex p-5'>

                <img className='w-9/12' src={logo} alt="" />
            </div>
            <p>Total questions: {total}</p>
            <button className='border-purple-500 border-2 w-full py-2 my-3 rounded-md hover:bg-purple-500'>Start quiz</button>
        </div>
    );
};

export default Topic;