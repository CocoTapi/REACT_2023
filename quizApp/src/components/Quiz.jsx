import { useState, useCallback } from "react"

import QUESTION from '../questions.js'
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

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
       return <Summary userAnswers={userAnswers} />;
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