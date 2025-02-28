import { useState, useCallback } from 'react';

import QUESTIONS from '../../questions.js';
import Question from './Question.jsx';
import Summary from './Summary.jsx';

import quizCompleteImg from '../assets/quiz-complete.png';

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
    

    const handleSelectedAnswer = useCallback(function handleSelectedAnswer(selectedAnswer) {
        setUserAnswers((prewAnswer) => {
            return [...prewAnswer, selectedAnswer];
        });
    },[]);

    const handleSkipAnswer = useCallback(() => handleSelectedAnswer(null), [handleSelectedAnswer]);

    if (quizIsComplete) {
        return (<Summary userAnswers={userAnswers} />)
    }

    return (
        <Question 
            key={activeQuestionIndex}
            index={activeQuestionIndex}
            onSelectAnswer={handleSelectedAnswer}
            onSkipAnswer={handleSkipAnswer}
        />
    );
}