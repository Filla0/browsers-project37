'use strict';

import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  // TIMER_ID,
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
  // const correctAnswer = quizData.questions[quizData.currentQuestionIndex.correct]

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
    
    answerElement.addEventListener('mouseenter', function(event) {
      event.target.style.transform = "scale(1.1)"
      event.target.style.color = 'orange'
      setTimeout(function() {
        event.target.style.color = "";
        event.target.style.transform = "";
      }, 500);
    }
    , false);
    answerElement.addEventListener('click', function() {
      // for(let i = 0; i < answersListElement.length; i++) {
      if(answerElement === correctAnswer){
        const message = document.createElement('p')
        answerElement.appendChild(message)
        message.textContent = 'correct answer'
      // }
    }
    })
  }
  // const timer = getElementById(TIMER_ID)
  const timer = document.createElement('span')
  timer.classList.add('timer')
  timer.textContent = 10;

  answersListElement.appendChild(timer)
  function countDown() {
    if(timer.textContent <= 0) {
      nextQuestion()
      clearInterval(timer)
    } else {
      timer.textContent = timer.textContent -1
    }

  };
  setInterval(countDown, 1000)

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};
