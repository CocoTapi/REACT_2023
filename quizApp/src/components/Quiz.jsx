import { useState, useCallback } from "react"

import QUESTION from '../questions.js'
import quizCompleteImg from '../assets/quiz-complete.png';
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz () {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    //not to shuffle the original array
    
    const quizIsComplete = activeQuestionIndex === QUESTION.length;

    const handleSelectAnser = useCallback((selectedAnswer) => {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnser(null), [handleSelectAnser])

    if (quizIsComplete) {
       return (
        <div id="summary"> 
            <img src={quizCompleteImg} alt="Trophy icon"/>
            <h2>Quiz Completed!</h2>
        </div>
       );
    };

    const shuffledAnswers = [...QUESTION[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="question">
                <QuestionTimer
                    key={activeQuestionIndex} 
                    timeout={10000} 
                    onTimeout={handleSkipAnswer}
                />
                <h2>{QUESTION[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map((answer) => (
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnser(answer)}>{answer}</button>
                        </li>
                    ))};
                </ul>
            </div>
        </div>
    )
}