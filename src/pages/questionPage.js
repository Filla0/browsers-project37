'use strict';

import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  const correctAnswer = currentQuestion.correct
  
  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answerElement.classList.add('answers')
    answersListElement.appendChild(answerElement);
    
    const onClick = function() {
      if(key === correctAnswer){
        answerElement.style.backgroundColor = 'rgb(0, 130, 2)'
        answerElement.style.transform = "scale(1.1)"
        answerElement.style.color = "white"
      } else {
        answerElement.style.backgroundColor = 'rgb(194, 2, 2)'
        answerElement.style.transform = "scale(1.1)"
        answerElement.style.color = "white"
      }
    }
    answerElement.addEventListener('click', onClick)
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};
