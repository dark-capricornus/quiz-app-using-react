import "./Quiz.css";
import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Question from "../../components/Question/Question";

const Quiz = ({ name, score, questions, setQuestions, setScore }) => {
  const [options, setOptions] = useState([]);
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    if (questions && questions.length > 0) {
      const shuffledOptions = handleShuffle([
        questions[currQues]?.correct_answer,
        ...questions[currQues]?.incorrect_answers,
      ]);
      setOptions(shuffledOptions);
    }
  }, [questions, currQues]);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  console.log(options);

  return (
    <div className="quiz">
      <span className="subtitle">Welcome, {name}</span>
      {questions ? <> 
      
          <div className="quizInfo">
            <span>{questions[currQues].category}</span>
            <span>Score: {score}</span>
          </div>
          <Question 
            currQues = {currQues}
            setCurrQues = {setCurrQues}
            questions = {questions}
            options = {options}
            correct = {questions[currQues]?.correct_answer}
            score = {score}
            setScore = {setScore}
          />
      </> : (
      <CircularProgress 
      style={
        {margin:100}}
        color='inherit'
        size={150}
        thickness={1}
      />
     )}
    </div>
  );
};

export default Quiz;
