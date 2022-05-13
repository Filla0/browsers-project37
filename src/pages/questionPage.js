'use strict';
import {
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  SKIP_THE_QUESTION,
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID
} from '../constants.js';
import {createQuestionElement} from '../views/questionView.js';
import {ShowRightAnswer, createAnswerElements} from '../views/answerView.js'
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex]
  const userInterface = document.getElementById(USER_INTERFACE_ID)
  userInterface.innerHTML = '';
  
  const questionElement = createQuestionElement(currentQuestion.text)
  userInterface.appendChild(questionElement); 
  
  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  const unableTheButton = document.getElementById(NEXT_QUESTION_BUTTON_ID)

  const answerElement = createAnswerElements(answersListElement, unableTheButton)
  userInterface.appendChild(answerElement)  
  
  const answerElementList = document.querySelectorAll('.answers')
  
  document
  .getElementById(NEXT_QUESTION_BUTTON_ID)
  .addEventListener('click', nextQuestion);
  document
  .getElementById(SKIP_THE_QUESTION)
  .addEventListener('click', () => ShowRightAnswer(answerElementList, unableTheButton))
};


export const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  // if(currentQuestion = questions.length){
  // const submit = getElementById(SUBMIT_BUTTON_ID)
  // submit.style.visibility = 'visible';
  // }

  initQuestionPage();
};
