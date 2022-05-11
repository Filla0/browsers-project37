'use strict';

import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
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

  let correctAnswerScore = document.createElement('span')
  correctAnswerScore.classList.add('counting')
  correctAnswerScore.textContent = 0;

  let score = correctAnswerScore.textContent
  score = 0;
  const count = function() {
    return score +=1;
  }
  
  const correctAnswerMessage = document.createElement('div')
  correctAnswerMessage.classList.add('message')
  correctAnswerMessage.textContent = `You have answered ${score} question correct`
  userInterface.appendChild(correctAnswerMessage)
  
  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answerElement.classList.add('answers')
    answersListElement.appendChild(answerElement);
    
    const selectedAnswer = function() {
      if(key === correctAnswer){
        answerElement.style.backgroundColor = 'rgb(0, 110, 3)'
        answerElement.style.transform = "scale(1.1)"
        answerElement.style.color = "white"
        correctAnswerMessage.textContent = `You have answered ${score} question correct`
        const unableTheButton = document.getElementById(NEXT_QUESTION_BUTTON_ID)
        unableTheButton.classList.add('unable-button')
        .removeAttribute('disabled')
        count()
      } else {
        answerElement.style.backgroundColor = 'rgb(194, 2, 2)'
        answerElement.style.transform = "scale(1.1)"
        answerElement.style.color = "white"
      }
    }
    answerElement.addEventListener('click', selectedAnswer)

    document
      .getElementById(SKIP_THE_QUESTION)
      .addEventListener('click', function ShowRightAnswer(){
        if(key === correctAnswer){
          answerElement.style.backgroundColor = 'rgb(0, 110, 3)'
          answerElement.style.transform = "scale(1.1)"
          answerElement.style.color = "white"
          setTimeout(nextQuestion, 1500)
        }
      })
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

  

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};
