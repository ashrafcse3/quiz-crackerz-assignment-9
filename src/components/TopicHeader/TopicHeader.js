import React from 'react';

const TopicHeader = () => {
    return (
        <div className='flex mx-8 my-10 py-8 bg-purple-200 justify-center items-center rounded-lg flex-col
        md:flex-row lg:flex-row'>
            <img className='h-60 rounded-xl' src="https://www.cirencesterlocals.co.uk/wp-content/uploads/2020/05/KayRansomPhotography0006.jpg" alt="" />
            <h3 className='text-5xl  lg:text-5xl md:text-3xl font-semibold w-1/4 md:ml-8 lg:ml-8'>Explore your knowledge with our selected questions for different topics</h3>
        </div>
    );
};

export default TopicHeader;