import React from "react";
import { AnswerObject } from '../App';
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';
type props = {
    question: string,
    answers: string[],
    callback: any,
    userAnswer: AnswerObject | undefined,
    questionNumber: number,
    totalQuestions: number
}
const QuestionCard: React.FC<props> = ({question, 
    answers, 
    callback,
    userAnswer,
    questionNumber,
    totalQuestions
    }) => {
    return (<Wrapper>
        <p className="number">
            Question: {questionNumber}/{totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{__html: question}} />
        <div>
            {answers.map((answer, index) => (
            <ButtonWrapper key={index} 
            correct={ userAnswer?.correctAnswer === answer} 
            userClicked={userAnswer?.answer === answer}
            >
                <button disabled={!!userAnswer} value={answer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{__html: answer}}></span>
                </button>
            </ButtonWrapper>
            ))}
        </div>
        </Wrapper>);
}

export default QuestionCard;