import { useState, useCallback } from "react"

import QUESTION from '../questions.js'
import quizCompleteImg from '../assets/quiz-complete.png';
import Question from "./Question.jsx";

export default function Quiz () {
    const [answerState, setAnswerState] = useState('');
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = 
        answerState === '' 
            ? userAnswers.length
            : userAnswers.length - 1;
    
    const quizIsComplete = activeQuestionIndex === QUESTION.length;

    const handleSelectAnser = useCallback(function handleSelectAnser(
        selectedAnswer) {
            setAnswerState('answered');
            setUserAnswers((prevUserAnswers) => {
                return [...prevUserAnswers, selectedAnswer];
            });

            setTimeout(() => {
                if(selectedAnswer === QUESTION[activeQuestionIndex].answers[0]) {
                    setAnswerState('correct');
                } else {
                    setAnswerState('wrong');
                }

                setTimeout(() => {
                    setAnswerState('');
                }, 2000);
            }, 1000);

    }, [activeQuestionIndex]);

    const handleSkipAnswer = useCallback(() => handleSelectAnser(null), [handleSelectAnser])

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
                timeout={10000}
                onTimeout={handleSkipAnswer}
                text={QUESTION[activeQuestionIndex].text}
                answers={QUESTION[activeQuestionIndex].answers}
                selectedAnser={userAnswers[userAnswers.length - 1]}
                answerState={answerState}
                onSelect={handleSelectAnser}
            />
        </div>
    )
}