import { useState, useCallback } from "react"

import QUESTION from '../questions.js'
import quizCompleteImg from '../assets/quiz-complete.png';
import Question from "./Question.jsx";

export default function Quiz () {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTION.length;

    const handleSelectAnser = useCallback(function handleSelectAnser(
        selectedAnswer) {
            setUserAnswers((prevUserAnswers) => {
                return [...prevUserAnswers, selectedAnswer];
            });

    }, []);

    const handleSkipAnswer = useCallback(
        () => handleSelectAnser(null), 
        [handleSelectAnser]
    )

    if (quizIsComplete) {
       return (
        <div id="summary"> 
            <img src={quizCompleteImg} alt="Trophy icon"/>
            <h2>Quiz Completed!</h2>
        </div>
       );
    };
    
    return (
        <div id="quiz">
            <Question 
                key={activeQuestionIndex} 
                index={activeQuestionIndex}
                onSkipAnswer={handleSkipAnswer}
                onSelectAnswer={handleSelectAnser}
            />
        </div>
    )
}