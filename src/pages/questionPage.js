'use strict';
import {
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import {createQuestionElement} from '../views/questionView.js';
import {createAnswerElements} from '../views/answerView.js'
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
   
  const questionElement = createQuestionElement(currentQuestion.text);
  userInterface.appendChild(questionElement);  

  const answerElement = createAnswerElements();
  userInterface.appendChild(answerElement)  
  
  document
  .getElementById(NEXT_QUESTION_BUTTON_ID)
  .addEventListener('click', nextQuestion);
};



export const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};
