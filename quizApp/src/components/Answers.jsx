import { useRef } from "react";

export default function Answers({ answers, selectedAnser, answerState, onSelect}) {
    const shuffledAnswers = useRef();
    
    //prevent from shuffling more than once
    if(!shuffledAnswers.current) {
        //not to shuffle the original array
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }

    return (
        <ul id="answers">
            {shuffledAnswers.current.map((answer) => {
                const isSelected = selectedAnser === answer;
                let cssClasses = '';

                if (answerState === 'answered' && isSelected) {
                    cssClasses = 'selected';
                }

                if (answerState === 'correct' || answerState === 'wrong' && isSelected) {
                    cssClasses = answerState;
                }

                return (
                    <li key={answer} className="answer">
                        <button 
                            onClick={() => onSelect(answer)}
                            className={cssClasses}
                        >
                            {answer}
                        </button>
                    </li>
                )
            })};
        </ul>
    )
};