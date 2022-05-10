'use strict';

import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  SKIP_THE_QUESTION,
  USER_INTERFACE_ID,
  SKIP_THE_QUESTION,
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

  let correctAnswerNumber = document.createElement('span')
  correctAnswerNumber.classList.add('counting')
  correctAnswerNumber.textContent = 0;

  let theNumber = correctAnswerNumber.textContent
  theNumber = 0;
  const count = function() {
    return theNumber +=1;
  }
  
  const correctAnswerMessage = document.createElement('div')
  correctAnswerMessage.classList.add('message')
  correctAnswerMessage.textContent = `You have answered ${theNumber} question correct`
  userInterface.appendChild(correctAnswerMessage)
  
  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answerElement.classList.add('answers')
    answersListElement.appendChild(answerElement);
    
    const onClick = function showRightAnswer() {
      if(key === correctAnswer){
        answerElement.style.backgroundColor = 'rgb(0, 130, 2)'
        answerElement.style.transform = "scale(1.1)"
        answerElement.style.color = "white"
        correctAnswerMessage.textContent = `You have answered ${theNumber} question correct`
        return count()
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

  document
    .getElementById(SKIP_THE_QUESTION)
    .addEventListener('click', function showAnswer(){
      showRightAnswer()
    })
  

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};
