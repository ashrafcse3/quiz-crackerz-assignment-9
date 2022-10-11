import React from 'react';

const Blog = ({ blog: { id, question, answer } }) => {
    return (
        <div className='bg-purple-200 p-5 m-5 rounded-xl'>
            <h3 className='font-bold text-3xl'>Q{id} {question}</h3>
            <p>Answer: {answer}</p>
        </div>
    );
};

export default Blog;