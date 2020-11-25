import React, { useState } from 'react';
import dip from '../assets/dip.jpg';
const questions = require('./Questions.json');
const quizTexts = require('./QuizTexts.json')
const quizTitles = require('./quizTitles.json')


const Quiz = (language) => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const answer = (ans) => {
        if (ans) {
            setScore(score + 1);
        }
        displayQuestions();
    };

    const displayQuestions = () => {
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowScore(true);
        }
    };

	return (
		<div className="quiz">
			<div className='text'>
					<h1> {quizTitles[language]} </h1>
                    <p> {quizTexts[language]} </p>
				</div>
                    {showScore ? (
                        window.location.href = "/game"
                    ) : (
                        <div className='quizQuestions'>
                            <div className='question'>
                                <h3>{ questions[language][currentQuestion].questionText }</h3>
                            </div>
                            <hr/>
                            <div className='answers'>
                                { questions[language][currentQuestion].answerOptions.map((ans) => (
                                        <button onClick={()=>answer(ans.isCorrect)}>{ans.answerText}</button>
                                )) }
                            </div>
                        </div>
                    )}
		</div>
	);
};

export default Quiz;