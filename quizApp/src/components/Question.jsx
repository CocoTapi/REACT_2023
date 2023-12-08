import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

export default function Question ({ 
    answers,
    text,
    selectedAnswer,
    answerState,
    onSelect,
    onTimeout,
    timeout
}) {
    return (
        <div id="question">
                <QuestionTimer
                    timeout={timeout} 
                    onTimeout={onTimeout}
                />
                <h2>{text}</h2>
                <Answers 
                    answers={answers}
                    selectedAnser={selectedAnswer}
                    answerState={answerState}
                    onSelect={onSelect}
                />
            </div>
    )
};