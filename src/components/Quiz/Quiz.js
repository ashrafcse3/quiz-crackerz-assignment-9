import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const { data } = useLoaderData();
    console.log(data);
    const { name, questions } = data;
    console.log(questions[2]);

    return (
        <div className='bg-gray-200 grid grid-cols-4'>
            {/* Questions */}
            <div className='col-span-3'>
                <h3 className='text-4xl text-indigo-900 font-bold text-center mt-8'>Quiz for {name}</h3>
                <div>
                    {
                        questions.map(question => <Question
                            key={question.id}
                            question={question}
                        ></Question>)
                    }
                </div>
            </div>
            {/* Show the total number of correct and wrong answer */}
            <div>
                <h4>Correct answers: 0</h4>
                <h4>Wrong answers: 0</h4>
            </div>
        </div>
    );
};

export default Quiz;