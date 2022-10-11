import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'

const Question = ({ question: { id, question, correctAnswer, options } }) => {

    const selectedAnswerHandler = (event) => {
        console.log(event.target.value);
    }

    return (
        <div onChange={selectedAnswerHandler.bind(this)} className="bg-white m-5 p-5 text-indigo-900 rounded-lg">
            <div className='flex justify-between'>
                <h3 className='text-3xl'><strong>Q: </strong>{question}</h3>
                <button>
                    <EyeIcon className="h-9 w-9"></EyeIcon>
                </button>
            </div>
            {
                options.map(option => <div
                    key={option}
                    className="p-2">
                    <input type="radio" value={option} name={question} id={option} className="mr-2" />
                    <label htmlFor={option}>{option}</label>
                </div>)
            }
        </div>
    );
};

export default Question;