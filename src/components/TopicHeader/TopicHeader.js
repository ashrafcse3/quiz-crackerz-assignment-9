import React from 'react';

const TopicHeader = () => {
    return (
        <div className='flex mx-8 my-10 bg-purple-200 h-96 justify-center items-center rounded-lg sm:flex-col lg:flex-row'>
            <img className='h-4/6 rounded-xl' src="https://www.cirencesterlocals.co.uk/wp-content/uploads/2020/05/KayRansomPhotography0006.jpg" alt="" />
            <h3 className='text-5xl font-semibold w-1/4 ml-8'>Explore your knowledge with our selected questions for different topics</h3>
        </div>
    );
};

export default TopicHeader;