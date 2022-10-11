import React from 'react';

const Question = ({ question: { id, question, correctAnswer, options } }) => {

    const selectedAnswerHandler = (event) => {
        console.log(event.target.value);
    }

    return (
        <div onChange={selectedAnswerHandler.bind(this)} className="bg-white m-5">
            <div className='flex justify-between'>
                <h3 className='text-3xl'>Q{question}</h3>
                <button>eye</button>
            </div>
            {
                options.map(option => <div
                    key={option}>
                    <input type="radio" value={option} name={question} id={option} />
                    <label htmlFor={option}>{option}</label>
                </div>)
            }
        </div>
    );
};

export default Question;