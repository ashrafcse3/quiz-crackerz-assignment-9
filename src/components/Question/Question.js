import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ question: { id, question, correctAnswer, options } }) => {

    const selectedAnswerHandler = (event) => {
        const selectedAnswer = event.target.value;
        if (selectedAnswer === correctAnswer) {
            toast("Answer is correct");
        }
        else {
            toast("Sorry! Answer is incorrect");
        }
    }

    const showCorrectAnswer = () => {
        toast(`Answer: ${correctAnswer}`);
    }

    return (
        <div onChange={selectedAnswerHandler.bind(this)} className="bg-white m-5 p-5 text-indigo-900 rounded-lg">
            <div className='flex justify-between'>
                <h3 className='text-3xl'><strong>Q: </strong>{question}</h3>
                <button onClick={showCorrectAnswer}>
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
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <ToastContainer />
        </div>
    );
};

export default Question;