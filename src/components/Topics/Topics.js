import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import TopicHeader from '../TopicHeader/TopicHeader';

const Topics = () => {
    const { data } = useLoaderData();
    console.log(data);
    return (
        <div>
            <TopicHeader></TopicHeader>
            <div className='bg-purple-200 mx-8 my-10 rounded-lg'>
                <h3 className='text-4xl font-semibold pt-8 text-center'>Different quiz topics</h3>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 p-16'>
                    {
                        data.map(topic => <Topic
                            key={topic.id}
                            topic={topic}
                        ></Topic>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Topics;